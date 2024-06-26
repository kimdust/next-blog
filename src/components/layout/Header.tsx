import Link from "next/link";
import { useAuth } from "@/firebase/auth";
import { useRouter } from "next/router";

const Header = () => {
  const { user, loginWithGoogle, logout } = useAuth();
  const router = useRouter();
  const isAboutPage = router.pathname === "/about";
  const isPostPage = router.pathname === "/post";

  return (
    <header className="flex items-center h-[100px] px-[150px] text-lg font-bold border-b-2 border-gray20 text-gray90">
      <h1 className="flex items-center gap-4 w-[33%]">
        <img src="/images/logo.png" alt="logo" className="w-8 h-8" />
        <Link href="/">DustLog</Link>
      </h1>

      <nav className="w-[33%] flex justify-center">
        <ul className="flex gap-14">
          <li className={isAboutPage ? "text-primary60" : ""}>
            <Link href="/about">About</Link>
          </li>
          <li className={isPostPage ? "text-primary60" : ""}>
            <Link href="/post">Post</Link>
          </li>
        </ul>
      </nav>

      <div className="w-[33%] flex justify-end">
        <Link href="/login">
          <button>
            <svg
              width="25"
              height="27"
              viewBox="0 0 16 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.00004 9.83333C10.3012 9.83333 12.1667 7.96785 12.1667 5.66667C12.1667 3.36548 10.3012 1.5 8.00004 1.5C5.69885 1.5 3.83337 3.36548 3.83337 5.66667C3.83337 7.96785 5.69885 9.83333 8.00004 9.83333Z"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.6667 16.5002C14.6667 14.7321 13.9643 13.0364 12.7141 11.7861C11.4638 10.5359 9.76815 9.8335 8.00004 9.8335C6.23193 9.8335 4.53624 10.5359 3.286 11.7861C2.03575 13.0364 1.33337 14.7321 1.33337 16.5002"
                stroke="black"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </Link>
      </div>

      {/* <div className="space-x-4">
        {user ? (
          <button onClick={logout} className="p-2 bg-red-500 rounded">
            로그아웃
          </button>
        ) : (
          <>
            <button
              onClick={loginWithGoogle}
              className="p-2 bg-blue-500 rounded"
            >
              Google로 로그인
            </button>
            <Link href="/login">
              <button className="p-2 bg-green-500 rounded">로그인</button>
            </Link>
            <Link href="/signup">
              <button className="p-2 bg-yellow-500 rounded">회원가입</button>
            </Link>
          </>
        )}
      </div> */}
    </header>
  );
};

export default Header;
