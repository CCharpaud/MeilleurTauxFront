import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import "../Next/style.css";

export default function Next(props) {
  return (
    <div className="wrapper">
      <div className="containOfNext">
        <Link to={props.link}>
          <div className="buttOfNext">
            <li> {props.name} </li>
          </div>
        </Link>
      </div>
    </div>
  );
}
