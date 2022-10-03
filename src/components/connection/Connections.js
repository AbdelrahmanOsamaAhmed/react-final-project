import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtoconnect } from "../../store/action";

export default function Connections() {
  let [Connectionslist, setConnectionslist] = useState([]);
  const [showButton, setShowButton] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((res) => setConnectionslist(res.users));
  }, []);

  let storeconnectionlist = useSelector((state) => state.connections);
  let dispatch = useDispatch();

  let connect = (user) => {
    dispatch(addtoconnect(user));
    console.log(storeconnectionlist);
  };
  console.log(useSelector((state) => state));
  return (
    <div>
      <h1>CONN</h1>
      <div className="row d-flex justify-content-center">
        {Connectionslist.map((conn) => {
          return (
            <div
              key={conn.id}
              className="card text-bg-dark col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-4 col-8 m-2 "
            >
              {
                <button
                  id={`${conn.id}`}
                  className="position-absolute bg-transparent  border-0 end-0 m-2"
                  style={{ width: "fit-content" }}
                  onClick={() => {
                    connect(conn);
                    let newconn = Connectionslist.filter((i) => {
                      if (i.id == conn.id) console.log(i);
                      else return i;
                    });
                    setConnectionslist(newconn);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    fill="green"
                    class="bi bi-plus-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                  </svg>
                </button>
              }

              {/* <Link to={`/connectiondetails/${conn.id}`} className="text-decoration-none "> */}
              <img src={conn.image} class="card-img" alt="..." />
              <div
                class="card-img-overlay "
                style={{
                  height: "fit-content",
                  top: "unset",
                  backgroundImage:
                    "linear-gradient(to top, rgba(0, 0, 0, 2), transparent)",
                }}
              >
                <h4 class="card-title text-light fw-bold ">
                  {conn.firstName + " " + conn.lastName}
                </h4>
                <div className="d-flex flex-row align-items-center justify-content-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="white"
                    class="bi bi-geo-alt-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                  <h6 class="card-title text-light fw-bold ms-1">
                    {conn.address.city}
                  </h6>
                </div>
                <div className="d-flex flex-row align-items-center justify-content-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    fill="currentColor"
                    class="bi bi-briefcase-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z" />
                    <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z" />
                  </svg>
                  <h6 class="card-title text-light fw-bold ms-1">
                    {conn.company.name}
                  </h6>
                </div>
              </div>
              {/* </Link> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
