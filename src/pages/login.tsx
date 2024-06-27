import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/firebase/auth";
import Link from "next/link";
import gsap from "gsap";

const Login = () => {
  const { user, login, loginWithGoogle, logout } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await login(email, password);
      router.push("/");
    } catch (err) {
      setError("로그인 실패: 잘못된 이메일 또는 비밀번호입니다.");
    }
  };

  const LoginRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

    tl.from(LoginRef.current, { opacity: 0, y: 50, duration: 1 });
    tl.play();
  }, []);

  return (
    <div
      ref={LoginRef}
      className="h-[calc(100vh-152px)] flex flex-col items-center pt-[80px]"
    >
      {user ? (
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-gray90 text-xxl mb-[38px]">로그아웃</h2>
          {error && <p>{error}</p>}
          <form onSubmit={handleLogin} className="flex flex-col gap-2">
            <p>로그아웃 하시겠습니까?</p>
            <button
              onClick={logout}
              className="py-2 mt-5 rounded-md bg-primary60 text-gray0"
            >
              로그아웃
            </button>
          </form>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-gray90 text-xxl mb-[38px]">로그인</h2>
          {error && <p>{error}</p>}
          <form onSubmit={handleLogin} className="flex flex-col gap-2">
            <label className="flex">
              <span className="w-[60px] block text-gray70">이메일</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="ml-3 border-2 rounded-md border-gray20"
              />
            </label>
            <label className="flex">
              <span className="w-[60px] block text-gray70">비밀번호</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="ml-3 border-2 rounded-md border-gray20"
              />
            </label>
            <button
              type="submit"
              className="py-2 mt-5 rounded-md bg-primary60 text-gray0"
            >
              로그인
            </button>
            <button
              onClick={loginWithGoogle}
              className="py-2 bg-blue-500 rounded-md text-gray0"
            >
              Google로 로그인
            </button>
            <div className="flex justify-between mt-[38px]">
              <p className="text-gray70">아직 회원이 아니신가요?</p>
              <Link href="/signup">
                <button className="font-bold text-gray90">회원가입</button>
              </Link>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
