import "./viewprofile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "../about/about";
import Reels from "../Reels/Reels";
import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from 'react-redux'

export default function ViewProfile() {
  let userr = {
    id: 1,
    firstName: "Terry",
    lastName: "Medhurst",
    maidenName: "Smitham",
    age: 50,
    gender: "male",
    email: "atuny0@sohu.com",
    phone: "+63 791 675 8914",
    username: "atuny0",
    password: "9uQFF1Lh",
    birthDate: "2000-12-25",
    image: "https://robohash.org/hicveldicta.png",
    bloodGroup: "A−",
    height: 189,
    weight: 75.4,
    eyeColor: "Green",
    hair: { color: "Black", type: "Strands" },
    domain: "slashdot.org",
    ip: "117.29.86.254",
    address: {
      address: "1745 T Street Southeast",
      city: "Washington",
      coordinates: { lat: 38.867033, lng: -76.979235 },
      postalCode: "20020",
      state: "DC",
    },
    macAddress: "13:69:BA:56:A3:74",
    university: "Capitol University",
    bank: {
      cardExpire: "06/22",
      cardNumber: "50380955204220685",
      cardType: "maestro",
      currency: "Peso",
      iban: "NO17 0695 2754 967",
    },
    company: {
      address: {
        address: "629 Debbie Drive",
        city: "Nashville",
        coordinates: { lat: 36.208114, lng: -86.58621199999999 },
        postalCode: "37076",
        state: "TN",
      },
      department: "Marketing",
      name: "Blanda-O'Keefe",
      title: "Help Desk Operator",
    },
    ein: "20-9487066",
    ssn: "661-64-2976",
    userAgent:
      "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24",
  };
  console.log(useSelector(state=>state.user))

  return (
    <>
      <div id="div1" className="container-fluid bg-secondary shadow-sm ">
        <img
          id="profile"
          className="rounded-circle bg-light"
          src={userr.image}
        ></img>
        <p className="display-6 pb-3">
          {userr.firstName} {userr.maidenName} {userr.lastName}
        </p>
      </div>
      <div id="div2" className="container shadow">
        <div className="p-3 m-3">
          {/* <Router> */}
            <ul className="nav h4 justify-content-center ">
              <li className="nav-item">
                {/* <a className="nav-link" href="/about">
                  About
                </a> */}
                <Link to={'/about'}>About</Link>
              </li>
              <li className="nav-item pl-5">
                <a className="nav-link" href="#">
                  My Posts
                </a>
              </li>
              <li className="nav-item pl-5">
                <a className="nav-link" href="/reels">
                  My Reels
                </a>
              </li>
            </ul>
            <div className="m-3 bg-light p-4 border-top">
              {/* <Route path="/about" component={About}></Route>



              {/* <Route path='/posts' component={Posts}></Route> */}
              {/* <Route path="/reels" component={Reels}></Route> */} 
            </div>
          {/* </Router> */}
        </div>
      </div>
    </>
  );
}
