import React, { useState } from "react";
import toast from "react-hot-toast";

const PostForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    toast.promise(
      new Promise((resolve) => {
        setTimeout(() => {
          resolve("Hello World");
          console.log(`Title: ${title}, Content: ${content}`);
          setTitle("");
          setContent("");
          setLoading(false);
        }, 3000);
      }),
      {
        loading: "Loading...",
        success: "Post created successfully!",
        error: "Error creating post",
      }
    );
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Post title"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Post content"
        required
      />
      <button type="submit" disabled={loading}>
        Create Post
      </button>
    </form>
  );
};

export default PostForm;
