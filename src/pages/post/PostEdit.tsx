import React, { useState, useEffect } from "react";
import { updateDocument } from "@/firebase/firestore";

interface PostEditProps {
  id: string;
  initialTitle: string;
  initialContent: string;
  onCancel: () => void;
  onUpdate: () => void;
}

const PostEdit: React.FC<PostEditProps> = ({
  id,
  initialTitle,
  initialContent,
  onCancel,
  onUpdate,
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [content, setContent] = useState(initialContent);

  const handleUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await updateDocument("posts", id, { title, content });
    onUpdate(); // 성공 시 부모 컴포넌트에 알리기 위해 사용
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleUpdate}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit">Update</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default PostEdit;
