import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

import "./postsingle.css"
function postsingles() {
    let params = useParams();
    let [post, setpost] = useState({});
    useEffect(() => {
        axios
            .get(
                'https://dummyjson.com/posts/${params.id}'
            )
            .then((onepost) => {
                console.log(onepost.data);
                setMovie(onepost.data);
            })
            .catch((err) => {
                console.log(err);
            });

    },);
    return (
        <>
            <div className="container">
                <div class="wrapper">
                    <div class="main_card">
                        <div class="card_left">
                            <div class="card_datails">
                                <div class="card_cat">
                                    <p class="year"> {post.tags}</p>

                                    <p class="time">{post.body} Min</p>
                                </div>
                                <h4 class="disc">{post.title}</h4>

                            </div>
                        </div>
                        <div class="card_right">

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}