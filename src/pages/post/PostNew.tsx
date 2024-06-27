import React, { useState, useEffect, useRef } from "react";
import { addDocument } from "@/firebase/firestore";
import Link from "next/link";
import gsap from "gsap";

const AddPostPage: React.FC = () => {
  const [title, setTitle] = useState("");
  const [subtitle, setsubTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (title.trim() === "" || content.trim() === "") {
      alert("제목과 내용을 입력하세요!");
      return;
    }

    try {
      await addDocument("posts", { title, subtitle, content });
      alert("새 게시물이 추가되었습니다!");
      setTitle("");
      setsubTitle("");
      setContent("");
    } catch (error) {
      console.error("게시물 추가 중 오류 발생:", error);
      alert("게시물 추가에 실패했습니다.");
    }
  };

  const postRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    tl.from(postRef.current, { opacity: 0, y: 50, duration: 1 });
    tl.play();
  }, []);

  return (
    <div
      ref={postRef}
      className="pt-[80px] flex items-center justify-center w-[100%]"
    >
      <form onSubmit={handleSubmit} className="w-[100%]">
        <div>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-b-2 placeholder-gray50 border-primary60 w-[100%] text-gray90 text-xxl font-bold pb-3"
            placeholder="제목을 입력하세요"
          />
        </div>
        <div>
          <input
            id="subtitle"
            type="text"
            value={subtitle}
            onChange={(e) => setsubTitle(e.target.value)}
            className=" placeholder-gray50 w-[100%] text-gray70 text-md mt-[20px]"
            placeholder="태그를 입력하세요"
          />
        </div>
        <div>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border-2 resize-none border-gray20 w-[100%] h-[400px] mt-[38px] p-[20px] rounded-lg text-md text-gray70"
            placeholder="당신의 글을 적어보세요"
          />
        </div>

        <div className="flex justify-end gap-6">
          <button>
            <Link
              href={"/post"}
              className="flex items-center justify-center  bg-gray20 p-[10px] w-[80px] rounded-md text-gray70 text-md mt-[38px]"
            >
              취소
            </Link>
          </button>

          <button
            type="submit"
            className="flex items-center justify-center  bg-primary60 p-[10px] w-[80px] rounded-md text-gray0 text-md mt-[38px]"
          >
            발행
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPostPage;
