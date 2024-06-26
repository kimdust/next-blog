import React from "react";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>DUSTLog</title>
      </Head>
      <main className="h-[calc(100vh-152px)] flex flex-col items-center justify-center">
        <img src="/images/logo.png" alt="logo" className="w-48" />
        <p className="mt-3 text-xl font-Medium text-gray70">
          먼지처럼 소복히 쌓이는 글
        </p>
        <h1 className="font-bold text-xxl">DUSTLog</h1>
      </main>
    </>
  );
}
