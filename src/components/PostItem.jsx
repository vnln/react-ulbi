import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post_content">
        <h3>
          {props.number}. {props.post.title}
        </h3>
        <div>{props.post.body}</div>
      </div>
      <div className="post_btns">
        <MyButton onClick={() => props.remove(props.post)}>Remove</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
