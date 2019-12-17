import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import "../Back/style.css";

export default function Back(props) {
  return (
    <div className="wrapper">
      <div className="containOfBack">
        <Link to={props.link}>
          <li> Précédent </li>
        </Link>
      </div>
    </div>
  );
}
