import React from "react";
import "./style.css";
import "../../App";

/* Conponents */
import Button from "../../components/Button";
import Next from "../../components/Next";
import ProgressBar from "../../components/ProgressBar";

export default function TypeBien() {
  return (
    <div className="wrapper">
      <div className="containOfType">
        <Button name="MAISON" />
        <Button name="APPARTEMENT" />
      </div>
      <div className="buttOfType">
        <span style={{ paddingLeft: "37%" }} />
        <ProgressBar percent="0%" />
        <Next link="etat-du-bien" />
      </div>
    </div>
  );
}
