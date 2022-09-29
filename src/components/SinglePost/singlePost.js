import { useState, useEffect } from "react";

const SinglePost = () => {
  //TODO: change later
  const postId = 1;

  const [comments, setComments] = useState([]);
  const [post, setPost] = useState();

  const clickHandler = () => {};

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));

    fetch(`https://dummyjson.com/comments/post/${postId}`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);

  // console.log(comments);
  // let m = comments.map((c) => c.body);
  // console.log(m);

  if (!post) return <>loading...</>;
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
      <div className="row d-flex flex-column justify-content-center align-items-center">
        <div className="col-8">
          <div className="card mt-3 w-100">
            <div className="card-body">
              <h5 className="card-title">title</h5>
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
          <form>
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
              />
              <button className="btn btn-primary" onClick={clickHandler}>
                post
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="row w-100 d-flex flex-column justify-content-center align-items-center mt-3">
        <div className="col-8"></div>
      </div>
    </div>
  );
};

export default SinglePost;

/*
          {comments.map((comment) => (
            <div>
              <p className="fw-bolder">{comment.user.username}</p>
              <p>{comment.body}</p>
            </div>
          ))}
*/
