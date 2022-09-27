import "./App.css";
import SidePanel from "./components/side panel/sidePanel";
import Reels from "./components/Reels/Reels";
import Connections from "./components/connection/Connections";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LogIn from "./components/login/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./components/signup/signup";
import ViewProfile from "./components/viewprofile/viewprofile";
import About from "./components/about/about";
import Home from "./components/home/home";

function App() {
  return (
    <>
      <Router>
        <div className="d-flex">
          <SidePanel />
          <Route path="/login" exact component={LogIn} />
          <Route path="/signup" exact component={SignUp} />
          <Route path="/connections" exact component={Connections} />
          <Route path="/reels" exact component={Reels} />
          <Route path="/profile" exact component={ViewProfile} />
          <Route path="/about" exact component={About} />
          <Route path="/" exact component={Home} />
        </div>
      </Router>
    </>
  );

  /* function App() {
  return (
    


function App() {
  return (
    
  );
} */
}

export default App;
