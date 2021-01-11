import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
        alt="Netflix Logo"
      />
      <svg
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        className="nav__avatar"
      >
        <g id="Page-1" fill="none" fill-rule="evenodd">
          <g id="Account-Holder" fill="#FCFDFF">
            <g id="profile1">
              <path
                d="M61 155l7-8h67c6.67 4 10 6.67 10 8 0 2 0-22-4-24s-67-2-78 1c-1.33 5.33-2 13-2 23z"
                id="mustache"
              />
              <path
                d="M94 77c-8.67 30-24.67 45-48 45-31 0-34-30-34-46 0-10.67 10-17 30-19h110c24.67 0 38 6 40 18 0 30-11.67 45.67-35 47-38 2-45-44-46-45-.67-.67-6.33-.67-17 0zM81 63c5.33 4.67 8 7.67 8 9h26c0-2 2.67-5 8-9H81z"
                id="sunglasses"
              />
              <path
                d="M111 35c1 5 4 13 4 14s45-13 70-2c-7-10-26-13-32-13-4 0-16 1-36 3-3.33-2-5.33-2.67-6-2z"
                id="right-brow"
              />
              <path
                d="M89 38h-7c-12.67-6.67-24.33-10-35-10-10.67 0-20.67 3-30 9 9.33-1.33 16.33-1.67 21-1 9 1 31 7 44 15 3.33-1.33 5.67-5.67 7-13z"
                id="left-brow"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

export default Nav;
