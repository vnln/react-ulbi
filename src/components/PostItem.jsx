const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post_content">
        <h3>
          {props.post.id}. {props.post.title}
        </h3>
        <div>{props.post.body}</div>
      </div>
      <div className="post_btns">
        <button>Delete</button>
      </div>
    </div>
  );
};

export default PostItem;
