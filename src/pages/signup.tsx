import { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/firebase/auth";

const Signup = () => {
  const { register } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await register(email, password);
      router.push("/");
    } catch (err) {
      setError(
        "회원가입 실패: 이메일 형식이 올바르지 않거나 비밀번호가 너무 짧습니다."
      );
    }
  };

  return (
    <div className="h-[calc(100vh-152px)] flex flex-col items-center pt-[80px]">
      <h2 className="font-bold text-gray90 text-xxl mb-[38px]">회원가입</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleRegister} className="flex flex-col gap-2">
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
          회원가입
        </button>
      </form>
    </div>
  );
};

export default Signup;
