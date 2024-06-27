// src/pages/post/[id].tsx
import { GetStaticProps, GetStaticPaths } from "next";
import { getPostById, getAllPostIds, Post } from "../../lib/posts";
import React, { useState, useEffect, useRef } from "react";
import { db } from "@/firebase/firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { deleteDocument } from "@/firebase/firestore";
import PostEdit from "./PostEdit";
import Link from "next/link";
import gsap from "gsap";

type PostDetailProps = {
  post: Post | null;
};

const PostDetail: React.FC<PostDetailProps> = ({ post }) => {
  if (!post) {
    return <p>포스트를 찾을 수 없습니다.</p>;
  }

  const [posts, setPosts] = useState<Post[]>([]);
  const [editingPostId, setEditingPostId] = useState<string | null>(null);

  const postRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    tl.from(postRef.current, { opacity: 0, y: 50, duration: 1 });
    tl.play();
  }, []);

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

  const handleDelete = async (id: string) => {
    await deleteDocument("posts", id);
    fetchPosts();
    try {
      await deleteDocument("posts", id);
      alert("게시물이 삭제되었습니다!");
    } catch (error) {
      console.error("게시물 삭제 중 오류 발생:", error);
      alert("게시물 삭제에 실패했습니다.");
    }
  };

  const handleUpdate = () => {
    setEditingPostId(null);
    fetchPosts();
  };

  return (
    <div ref={postRef} className="h-[calc(100vh-152px)] px-[460px]">
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
          <div>
            <div className="pt-[80px] flex flex-col justify-center w-[100%]">
              <h3 className="border-b-2 placeholder-gray50 border-primary60 w-[100%] text-gray90 text-xxl font-bold pb-3">
                {post.title}
              </h3>
              <p className=" placeholder-gray50 w-[100%] text-gray70 text-md mt-[20px]">
                {post.subtitle}
              </p>
              <p className="border-2 resize-none border-gray20 w-[100%] h-[400px] mt-[38px] p-[20px] rounded-lg text-md text-gray70">
                {post.content}
              </p>
              <div className="flex justify-end gap-6">
                <button
                  onClick={() => setEditingPostId(post.id)}
                  className="flex items-center justify-center  bg-gray20 p-[10px] w-[80px] rounded-md text-gray70 text-md mt-[38px]"
                >
                  수정
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="flex items-center justify-center  bg-primary60 p-[10px] w-[80px] rounded-md text-gray0 text-md mt-[38px]"
                >
                  <Link href={"/post"}>삭제</Link>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { id } = context.params!;
  const post = await getPostById(id as string);

  return {
    props: {
      post,
    },
  };
};

export default PostDetail;
