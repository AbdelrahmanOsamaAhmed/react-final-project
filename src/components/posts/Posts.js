import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./posts.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Post = () => {
  const state = useSelector((state) => state);

  const [data, setData] = useState(0);
  const [postlist, setPostlist] = useState([]);

  const increment = () => {
    setData(data + 1);
  };
  const decrement = () => {
    setData(data - 1);
  };

  useEffect(() => {
    fetch(`https://dummyjson.com/posts`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPostlist(
          data.posts.filter((post) => {
            const defaultConnections = [27, 28, 29, 30];

            const isUser = post.userId === state.user.id;
            const inConnections = state.connections.find(
              (conn) => conn.id === post.userId
            );
            const isDefaultConnection = defaultConnections.find(
              (connId) => connId === post.userId
            );
            if (isUser || inConnections || isDefaultConnection) {
              return post;
            }
          })
        );
      });
  }, []);

  console.log(postlist);

  return (
    <div className="x">
      {postlist.map((post) => (
        <Card
          key={post.id}
          style={{
            width: "45%",
            padding: "15px 20px",
            boxShadow: "0px 0px 12px rgba(0,0,0,0.3)",
          }}
        >
          <Card.Text>{post.body}</Card.Text>
          <Card.Body>
            <Link to={`/singlePost/${post.id}`}>
              <Card.Title>{post.title}</Card.Title>
            </Link>
            {/* <button id="button" style={{ width: '70px' }}>LIKE</button> */}
            {/* <Link to={`/posts/${post.id}`}>{post.title}</Link> */}

            <div className="postBottom">
              <div className="postBottomLeft">
                <img
                  className="likeIcon"
                  // onClick={likeHandler}
                  src={
                    "https://cdn.vectorstock.com/i/1000x1000/99/82/like-icon-on-blue-circle-vector-22509982.webp"
                  }
                  alt="like"
                />
                <img
                  className="likeIcon"
                  // onClick={likeHandler}
                  src={
                    "https://png.pngtree.com/png-clipart/20190516/original/pngtree-facebook-love-icon-png-image_3584863.jpg"
                  }
                  alt="heart"
                />
                {/* <span className="postLikeCounter">{like} people liked it</span> */}
              </div>
              <div className="postBottomRight">
                {/* <span className="postCommentText" onClick={showCommentHandler}>
                                    {post?.comments.length} comments
                                </span> */}
              </div>
            </div>

            <button type="button" onClick={increment} className="btn">
              LIKE
            </button>
            <button type="button" onClick={increment} className="btn2">
              Love
            </button>
            <button type="button" onClick={increment} className="btn3">
              Dis Like
            </button>
            <p>
              Likes: <a id="counting">{data}</a>
            </p>
            <p>
              Loves: <a id="counting">{data}</a>
            </p>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Post;
