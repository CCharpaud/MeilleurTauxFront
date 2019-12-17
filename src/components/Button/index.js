import React from "react";
import "../Button/style.css";

export default function Button(props) {
  return (
    <div className="wrapper">
      <button className="butt">
        <input type="radio" name="radio" />
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#292929"
          stroke-width="2.5"
          stroke-linecap="square"
          stroke-linejoin="arcs"
        >
          <circle cx="12" cy="12" r="10"></circle>
        </svg> */}
        <span> {props.name}</span>
      </button>
    </div>
  );
}
