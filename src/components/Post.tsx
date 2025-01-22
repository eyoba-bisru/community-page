import { FC } from "react";
import { Post as PostType } from "../types";
import { NavLink } from "react-router";

interface PostProps {
  post: PostType;
}

const Post: FC<PostProps> = ({ post }) => {
  return (
    <div className="post">
      {/* Link to the post detail page */}
      <NavLink to={`/post/${post.id}`}>
        {" "}
        <h2>{post.title}</h2>
      </NavLink>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;
