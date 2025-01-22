import { useParams } from "react-router";
import { posts } from "../data/mockData";
import Comment from "./Comment";
import CommentForm from "./CommentForm";

const PostDetail: React.FC = () => {
  const { id } = useParams();

  const post = posts.find((post) => post.id === Number(id));

  return (
    <div className="postdetail app">
      <h2>{post?.title}</h2>
      <p>{post?.content}</p>
      {/* Display comments */}
      <div className="comments">
        {post?.comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
      Comment form
      <CommentForm postId={post?.id} />
    </div>
  );
};

export default PostDetail;
