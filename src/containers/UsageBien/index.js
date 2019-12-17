import React from "react";
import "./style.css";
import "../../App";

/* Conponents */
import Button from "../../components/Button";
import Next from "../../components/Next";
import Back from "../../components/Back";
import ProgressBar from "../../components/ProgressBar";

export default function UsageBien() {
  return (
    <div className="wrapper">
      <div className="containOfType">
        <Button name="RÉSIDENCE PRINCIPALE" />
        <Button name="RÉSIDENCE SECONDAIRE" />
        <Button name="INVESTISSEMENT LOCATIF" />
      </div>
      <div className="buttOfType">
        <Back link="etat-du-bien" />
        <ProgressBar percent="28%" />
        <Next />
      </div>
    </div>
  );
}
