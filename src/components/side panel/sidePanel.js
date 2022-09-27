import "./sidepanel.css";
import * as React from 'react';

const SidePanel = () => {

  const toggler = () => {
    document.querySelector(".sidepanel").classList.toggle("active");
  }
  return (
    <div className="sidepanel active border border-dark position-fixed vh-100 d-flex-column justify-content-center align-items-center">
      <header className="fs-2 d-flex justify-content-center align-items-center px-3 mb-5">
        <span>sidebar</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="currentColor"
          className="bi bi-list toggler"
          viewBox="0 0 16 16"
          onClick={() => toggler()}
        >
          <path
            fillRule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </header>
      <ul className="d-flex-column justify-content-end p-0 ">
        <li>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-person-plus-fill"
              viewBox="0 0 16 16"
            >
              <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
              <path
                fillRule="evenodd"
                d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
              />
            </svg>{" "}
            <span className="linkText">Connect</span>
          </a>
        </li>
        <li>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-collection-play-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm6.258-6.437a.5.5 0 0 1 .507.013l4 2.5a.5.5 0 0 1 0 .848l-4 2.5A.5.5 0 0 1 6 12V7a.5.5 0 0 1 .258-.437z" />
            </svg>{" "}
            <span className="linkText">Reels</span>
          </a>
        </li>
        <li>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>{" "}
            <span className="linkText">My Profile</span>
          </a>
        </li>
        <li>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              className="bi bi-unindent"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M13 8a.5.5 0 0 0-.5-.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H12.5A.5.5 0 0 0 13 8Z"
              />
              <path
                fillRule="evenodd"
                d="M3.5 4a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7a.5.5 0 0 0-.5-.5Z"
              />
            </svg>
            <span className="linkText">Log out</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SidePanel;
