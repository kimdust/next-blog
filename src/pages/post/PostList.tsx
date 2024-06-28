import React, { useState, useEffect } from "react";
import { db } from "@/firebase/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import PostEdit from "./PostEdit";
import Link from "next/link";

interface Post {
  id: string;
  title: string;
  subtitle: string;
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
      subtitle: doc.data().subtitle,
      content: doc.data().content,
    }));
    setPosts(postsData);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleUpdate = () => {
    setEditingPostId(null);
    fetchPosts();
  };

  return (
    <div className="pt-[38px] flex justify-center">
      {editingPostId ? (
        <PostEdit
          id={editingPostId}
          initialTitle={
            posts.find((post) => post.id === editingPostId)?.title ?? ""
          }
          initialsubTitle={
            posts.find((post) => post.id === editingPostId)?.subtitle ?? ""
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
            <ul className="w-[100%] gap-6 grid grid-cols-4">
              {posts.map((post) => (
                <li
                  key={post.id}
                  className="w-[100%] bg-gray10 rounded-md p-[20px]"
                >
                  <Link href={`/post/${post.id}`}>
                    <p className="text-sm text-gray50">{post.subtitle}</p>
                    <h3 className="text-xl font-bold text-gray90">
                      {post.title}
                    </h3>
                    <p className="block overflow-hidden whitespace-wrap text-ellipsis text-md text-gray70 mt-[20px]">
                      {post.content}
                    </p>
                  </Link>
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
