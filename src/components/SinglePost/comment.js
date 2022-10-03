const Comment = ({ comment }) => {
  return (
    <div className="p-2 rounded mb-1" style={{ backgroundColor: "#eee" }}>
      <p className="fw-bolder">{comment.user?.username}</p>
      <p>{comment.body}</p>
    </div>
  );
};

export default Comment;
