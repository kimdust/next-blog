import PostsList from "./PostList";
import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

const PostsPage: React.FC = () => {
  const btnRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    tl.from(btnRef.current, { opacity: 0, x: -50, duration: 1 });
    tl.from(listRef.current, { opacity: 0, y: 50, duration: 1 }, "-=0.5");
    tl.play();
  }, []);

  return (
    <div className="h-[calc(100vh-152px)] px-[150px]">
      <div className="pt-[80px] flex justify-end">
        <button
          ref={btnRef}
          className="flex items-center justify-center float-right bg-primary60 p-[10px] w-[150px] rounded-md text-gray0 text-md "
        >
          <Link href="/addpost">포스트 작성하기</Link>
        </button>
      </div>
      <div ref={listRef}>
        <PostsList />
      </div>
    </div>
  );
};

export default PostsPage;
