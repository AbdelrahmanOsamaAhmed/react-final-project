import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import LogIn from "./components/login/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./components/signup/signup";

function App() {
  return (
    <>
      <Router>
        <Route path="/login" exact component={LogIn} />

        <Route path="/signup" exact component={SignUp} />
      </Router>
    </>
  );
}

export default App;
