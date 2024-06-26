import React, { useEffect, useRef } from "react";
import Head from "next/head";
import gsap from "gsap";

export default function Home() {
  const mainRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    tl.from(imageRef.current, { opacity: 0, y: -50, duration: 1 });

    tl.from(textRef.current, { opacity: 0, y: 50, duration: 1 }, "-=0.5");

    tl.from(titleRef.current, { opacity: 0, y: 50, duration: 1.5 }, "-=0.5");
    tl.play();
  }, []);

  return (
    <>
      <Head>
        <title>DustLog</title>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="DustLog" />
        <meta property="og:description" content="먼지처럼 소복히 쌓이는 글" />
        <meta property="og:image" content="./images/urlthumbnail.png" />
        <meta property="og:url" content="https://kimdust.me/next-log" />

        <link
          rel="icon"
          href="./images/favicon.ico"
          type="image/x-icon"
          sizes="16x16"
        />
      </Head>
      <main
        ref={mainRef}
        className="h-[calc(100vh-152px)] flex flex-col items-center justify-center"
      >
        <div
          ref={imageRef}
          className="bg-primary60 w-[160px] h-[160px] flex items-center justify-center font-bold text-[120px] rounded-3xl text-gray0"
        >
          D
        </div>

        <p ref={textRef} className="mt-3 text-xl font-Medium text-gray70">
          먼지처럼 소복히 쌓이는 글
        </p>
        <h1 ref={titleRef} className="font-bold text-xxl">
          DUSTLog
        </h1>
      </main>
    </>
  );
}
