import React, { useState, useEffect } from "react";
import { db } from "@/firebase/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { deleteDocument } from "@/firebase/firestore";
import PostEdit from "./PostEdit";

interface Post {
  id: string;
  title: string;
  content: string;
}

const PostsList: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [editingPostId, setEditingPostId] = useState<string | null>(null);

  // Firestore에서 모든 글을 가져와 상태로 설정
  const fetchPosts = async () => {
    const querySnapshot = await getDocs(
      query(collection(db, "posts"), orderBy("title"))
    );
    const postsData = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      title: doc.data().title,
      content: doc.data().content,
    }));
    setPosts(postsData);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // 글 삭제
  const handleDelete = async (id: string) => {
    await deleteDocument("posts", id);
    fetchPosts(); // 목록을 다시 불러옵니다.
  };

  // 글 편집 완료
  const handleUpdate = () => {
    setEditingPostId(null);
    fetchPosts(); // 업데이트된 목록을 불러옵니다.
  };

  return (
    <div className="pt-[80px] flex justify-center">
      {editingPostId ? (
        <PostEdit
          id={editingPostId}
          initialTitle={
            posts.find((post) => post.id === editingPostId)?.title ?? ""
          }
          initialContent={
            posts.find((post) => post.id === editingPostId)?.content ?? ""
          }
          onCancel={() => setEditingPostId(null)}
          onUpdate={handleUpdate}
        />
      ) : (
        <>
          {posts.length > 0 ? (
            <ul>
              {posts.map((post) => (
                <li key={post.id}>
                  <h3>{post.title}</h3>
                  <p>{post.content}</p>
                  <button onClick={() => setEditingPostId(post.id)}>
                    Edit
                  </button>
                  <button onClick={() => handleDelete(post.id)}>Delete</button>
                </li>
              ))}
            </ul>
          ) : (
            <p>작성된 포스트가 없습니다.</p>
          )}
        </>
      )}
    </div>
  );
};

export default PostsList;
