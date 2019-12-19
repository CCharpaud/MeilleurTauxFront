import React from "react";
import "../Title/style.css";

export default function Title(props) {
  return (
    <div className="title">
      <span> {props.name} </span>
    </div>
  );
}
