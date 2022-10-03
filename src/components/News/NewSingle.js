import React from "react";
import "./newsStyle.css";
const NewSingle = ({ item }) => (
  <div className="card">
    <div className="card-image">
      <img className="card-img-top" src={item.urlToImage} alt={item.title} />
    </div>
    <h5>{item.title}</h5>
    <div className="card-action">
      <a href={item.url} className="btn btn-primary" target="_blank">
        Read More
      </a>
    </div>
  </div>
);

export default NewSingle;
