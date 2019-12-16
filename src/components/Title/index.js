import React from "react";
import "../Title/style.css";
import InfoLogo from "../../img/infos.png";

export default function Title(props) {
  return (
    <div className="title">
      <div className="wrapper">
        <span> {props.name} </span>
        <img src={InfoLogo} alt="informations" />
      </div>
    </div>
  );
}
