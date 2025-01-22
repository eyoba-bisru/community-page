import { FC } from "react";
import { Comment as CommentType } from "../types";
import CommentForm from "./CommentForm";

interface CommentProps {
  comment: CommentType;
}

const Comment: FC<CommentProps> = ({ comment }) => {
  return (
    <div className="comment">
      <p>{comment.content}</p>

      {/* Display nested replies */}
      {comment.replies && comment.replies.length > 0 && (
        <div className="replies">
          {comment.replies.map((reply) => (
            <div key={reply.id} className="reply">
              <p>{reply.content}</p>
            </div>
          ))}
        </div>
      )}

      {/* Form for replying to a comment */}
      <CommentForm commentId={comment.id} />
    </div>
  );
};

export default Comment;
