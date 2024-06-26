import PostsList from "./PostList";
import Link from "next/link";

const PostsPage: React.FC = () => {
  return (
    <div className="h-[calc(100vh-152px)] px-[150px]">
      <div>
        <button>
          <Link href="/addpost">포스트 작성하기</Link>
        </button>
      </div>
      <PostsList />
    </div>
  );
};

export default PostsPage;
