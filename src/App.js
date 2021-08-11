import { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import MySelect from "./components/UI/select/MySelect";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "b", body: "z" },
    { id: 2, title: "c", body: "x" },
    { id: 3, title: "a", body: "y" },
  ]);
  // const [posts, setPosts] = useState([
  //   { id: 1, title: "title", body: "description" },
  //   { id: 2, title: "title 2", body: "description 2" },
  //   { id: 3, title: "title 3", body: "description 3" },
  // ]);
  const [selectedSort, setSelectedSort] = useState("");

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      <div>
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Sort"
          options={[
            { value: "title", name: "By Name" },
            { value: "body", name: "By Description" },
          ]}
        />
      </div>
      {posts.length ? (
        <PostList remove={removePost} posts={posts} title="Posts" />
      ) : (
        <div>
          <h1 style={{ textAlign: "center" }}>Posts not found</h1>
        </div>
      )}
    </div>
  );
}

export default App;
