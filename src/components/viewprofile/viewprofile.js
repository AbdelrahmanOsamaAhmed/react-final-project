import "./viewprofile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function ViewProfile() {
  let userr = useSelector((state) => state.user);
  console.log();

  return (
    <>
      <div className="w-full">
        <div
          id="div1"
          className="container-fluid bg-secondary shadow-sm d-flex flex-col align-items-center"
        >
          <img
            id="profile"
            className="rounded-circle bg-light"
            src={userr.image}
          ></img>
          <p className="display-6 pb-3">
            {userr.firstName} {userr.maidenName} {userr.lastName}
          </p>
        </div>
        <div className="container shadow">
          <div className="p-3 m-3">
            {/* <Router> */}
            <ul className="nav h4 justify-content-center ">
              <li className="nav-item">
                {/* <a className="nav-link" href="/about">
                  About
                </a> */}
                <Link className="nav-link" to={"/about"}>
                  About
                </Link>
              </li>
              <li className="nav-item pl-5">
                <Link className="nav-link" to="/myconnections">
                  My Connections
                </Link>
              </li>
              <li className="nav-item pl-5">
                <Link className="nav-link" to="/reels">
                  My Reels
                </Link>
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
      </div>
    </>
  );
}
