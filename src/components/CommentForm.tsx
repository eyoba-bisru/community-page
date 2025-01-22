import React, { FC, useState } from "react";
import toast from "react-hot-toast";

interface CommentFormProps {
  postId?: number;
  commentId?: number;
}

const CommentForm: FC<CommentFormProps> = ({ postId, commentId }) => {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (postId) {
      // Submit a new comment on a post
      setLoading(true);
      toast.promise(
        new Promise((resolve) => {
          setTimeout(() => {
            resolve("Hello World");
            setLoading(false);
          }, 3000);
        }),
        {
          loading: "Loading...",
          success: "Comment created successfully!",
          error: "Error creating comment",
        }
      );
      console.log(`Post ID: ${postId}, Comment: ${content}`);
    } else if (commentId) {
      setLoading(true);
      // Submit a reply to a comment
      toast.promise(
        new Promise((_resolve, reject) => {
          setLoading(false);
          return reject("Hello World");
        }),
        {
          loading: "Loading...",
          success: "Reply created successfully!",
          error: "Error creating replied",
        }
      );
      console.log(`Comment ID: ${commentId}, Reply: ${content}`);
    }
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Add a comment..."
        required
      />
      <button type="submit" disabled={loading}>
        Submit
      </button>
    </form>
  );
};

export default CommentForm;
