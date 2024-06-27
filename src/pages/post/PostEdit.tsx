import React, { useState, useEffect } from "react";
import { updateDocument } from "@/firebase/firestore";
import Link from "next/link";

interface PostEditProps {
  id: string;
  initialTitle: string;
  initialsubTitle: string;
  initialContent: string;
  onCancel: () => void;
  onUpdate: () => void;
}

const PostEdit: React.FC<PostEditProps> = ({
  id,
  initialTitle,
  initialsubTitle,
  initialContent,
  onCancel,
  onUpdate,
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [subtitle, setsubTitle] = useState(initialsubTitle);
  const [content, setContent] = useState(initialContent);

  const handleUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await updateDocument("posts", id, { title, content });
    onUpdate();
    try {
      await updateDocument("posts", id, { title, content });
      alert("게시물이 수정되었습니다!");
    } catch (error) {
      console.error("게시물 수정 중 오류 발생:", error);
      alert("게시물 수정에 실패했습니다.");
    }
  };

  return (
    <div className="pt-[80px] flex items-center justify-center w-[100%]">
      <form onSubmit={handleUpdate} className="w-[100%]">
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border-b-2 placeholder-gray50 border-primary60 w-[100%] text-gray90 text-xxl font-bold pb-3"
        />

        <input
          id="subtitle"
          type="text"
          value={subtitle}
          onChange={(e) => setsubTitle(e.target.value)}
          className=" placeholder-gray50 w-[100%] text-gray70 text-md mt-[20px]"
        />

        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border-2 resize-none border-gray20 w-[100%] h-[400px] mt-[38px] p-[20px] rounded-lg text-md text-gray70"
        />

        <div className="flex justify-end gap-6">
          <button
            type="button"
            onClick={onCancel}
            className="flex items-center justify-center  bg-gray20 p-[10px] w-[80px] rounded-md text-gray70 text-md mt-[30px]"
          >
            취소
          </button>
          <button
            type="submit"
            className="flex items-center justify-center  bg-primary60 p-[10px] w-[80px] rounded-md text-gray0 text-md mt-[30px]"
          >
            수정
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostEdit;
