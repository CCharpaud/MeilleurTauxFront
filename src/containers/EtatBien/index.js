import React from "react";
import "./style.css";
import "../../App";

/* Conponents */
import Button from "../../components/Button";
import Back from "../../components/Back";
import Next from "../../components/Next";
import ProgressBar from "../../components/ProgressBar";

export default function EtatBien() {
  return (
    <div className="wrapper">
      <div className="containOfUse">
        <Button name="ANCIEN" />
        <Button name="NEUF" />
      </div>
      <div className="buttOfUse">
        <Back link="type-de-bien" />
        <ProgressBar percent="14%" />
        <Next link="usage-du-bien" />
      </div>
    </div>
  );
}
