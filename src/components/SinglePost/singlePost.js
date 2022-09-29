import { useState, useEffect, useRef } from "react";
import Comment from "./comment";
import { useDispatch, useSelector } from "react-redux";

const SinglePost = () => {
  //TODO: change later
  const postId = 1;

  const user = useSelector((state) => state);
  console.log(user);

  const [comments, setComments] = useState([{}]);
  const [post, setPost] = useState();

  const inputRef = useRef(null);

  const clickHandler = (e) => {
    e.preventDefault();
    if (inputRef.current.value.length === 0) return;
    setComments([
      ...comments,
      //   {
      //     body: inputRef.current.value,
      //     id: Math.random(),
      //     postId,
      //     user: {
      //       id: state.id,
      //       username: state.username,
      //     },
      //   },
    ]);
    inputRef.current.value = "";
  };

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));

    fetch(`https://dummyjson.com/comments/post/${postId}`)
      .then((res) => res.json())
      .then((data) => setComments(data.comments));
  }, []);

  console.log(comments);

  if (!post) return <>loading...</>;
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <div className="row d-flex flex-column justify-content-center align-items-center">
        <div className="col-8">
          <div className="card mt-3 w-100">
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.body}</p>
              <p>
                <button className="btn btn-primary me-4">like</button>
                <button className="btn btn-primary">share</button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row w-100 d-flex flex-column justify-content-center align-items-center mt-3">
        <div className="col-8">
          <form onSubmit={clickHandler}>
            <div className="d-flex flex-wrap justify-content-start align-items-center">
              <label
                htmlFor="exampleFormControlInput1"
                className="form-label w-100"
              >
                Add comment
              </label>
              <input
                type="text"
                className="form-control w-75"
                id="exampleFormControlInput1"
                placeholder="comment"
                ref={inputRef}
              />
              <button type="submit" className="btn btn-primary ms-3">
                post
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="row w-100 d-flex flex-column justify-content-center align-items-center mt-3">
        <div className="col-8">
          {comments.map((comment) => (
            <Comment key={Math.random()} comment={comment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SinglePost;

/*

*/
