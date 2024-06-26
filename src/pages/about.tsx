import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <main className="h-[calc(100vh-152px)] px-[150px]">
      <span className="pt-[80px] block text-gray50">
        먼지처럼 소복히 쌓이는 글
      </span>
      <h2 className="flex items-center gap-4 text-xl font-bold text-gray90 mt-[10px] mb-[38px]">
        <img src="/images/logo.png" alt="logo" className="w-10 h-10" />
        <span>DustLog</span>
      </h2>
      <p className="text-md text-gray70">
        Next.js와 TypeScript를 사용해 만든 블로그입니다.
        <br />
        Firebase를 이용해 회원가입과 로그인 동작을 구현했으며 tailwind
        라이브러리를 사용해 css를 적용했습니다.
        <br />이 홈페이지의 모든 디자인은 정부 디자인 가이드 'KRDS'의 규칙을
        지키며 제작하였습니다.
      </p>
      <Link href="https://uiux.egovframe.go.kr/guide/index.html">
        <button className="flex items-center justify-center  bg-primary60 p-[10px] w-[300px] rounded-md text-gray0 text-md mt-[38px]">
          정부 디자인 가이드 보러가기
        </button>
      </Link>
    </main>
  );
};

export default About;
