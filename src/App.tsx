import { FC } from "react";
import { posts } from "./data/mockData";
import Post from "./components/Post";
import PostForm from "./components/PostForm";

const App: FC = () => {
  return (
    <div className="app">
      <h1>Community Page</h1>
      <PostForm />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default App;
