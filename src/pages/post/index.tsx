import PostsList from "./PostList";
import Link from "next/link";

const PostsPage: React.FC = () => {
  return (
    <div className="h-[calc(100vh-152px)] px-[150px]">
      <div className="pt-[80px] flex justify-end">
        <button className="flex items-center justify-center float-right bg-primary60 p-[10px] w-[150px] rounded-md text-gray0 text-md ">
          <Link href="/addpost">포스트 작성하기</Link>
        </button>
      </div>
      <PostsList />
    </div>
  );
};

export default PostsPage;
