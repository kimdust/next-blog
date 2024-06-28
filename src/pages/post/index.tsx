import PostsList from "./PostList";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";

const PostsPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const btnRef = useRef(null);
  const listRef = useRef(null);
  const modalRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    tl.from(btnRef.current, { opacity: 0, x: -50, duration: 1 });
    tl.from(listRef.current, { opacity: 0, y: 50, duration: 1 }, "-=0.5");
    tl.from(modalRef.current, { opacity: 0, y: 50, duration: 1 }, "-=0.5");
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
      {/* <div ref={modalRef}>
        {isModalOpen && (
          <div className="text-center bg-gray0 w-[43%] rounded-md py-[38px] text-gray90 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] shadow-xl">
            <p>
              안녕하세요 저의 블로그를 보러 와주셔서 감사합니다
              <br />
              <br />
              이 블로그는 Next.js를 사용해 Github로 배포한 정적 배포
              홈페이지입니다
              <br />
              게시글 작성 후 클릭 시 디테일 페이지로 들어가지는 게 올바른
              동작이고 실제 로컬에서도 잘 동작되었지만
              <br />
              배포 후의 문제로 게시물 클릭 시 404 에러가 뜨는 문제가 발생하고
              있습니다
              <br />
              <br />
              열심히 고쳐보려 노력 중이니 너그러이 이해 부탁드립니다 ㅜ.ㅜ
            </p>
            <div className="mt-[38px]">
              <button
                className="px-[15px] py-[8px] bg-gray10 rounded-md mr-[24px]"
                onClick={closeModal}
              >
                알겠습니다
              </button>
              <button
                className="px-[15px] py-[8px] bg-primary60 rounded-md text-gray0"
                onClick={closeModal}
              >
                당신은 더 노력해야겠군요
              </button>
            </div>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default PostsPage;
