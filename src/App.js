import { useState } from "react";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "title", body: "description" },
    { id: 2, title: "title 2", body: "description 2" },
    { id: 3, title: "title 3", body: "description 3" },
  ]);
  return (
    <div className="App">
      <form>
        <MyInput type="text" placeholder="Post title" />
        <MyInput type="text" placeholder="Post content" />
        <MyButton>Create post</MyButton>
      </form>
      <PostList posts={posts} title="Posts" />
    </div>
  );
}

export default App;
