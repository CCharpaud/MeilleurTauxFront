import React from "react";
import "./style.css";
import "../../App";

/* Conponents */
import Button from "../../components/Button";
import Back from "../../components/Back";
import Next from "../../components/Next";
import ProgressBar from "../../components/ProgressBar";

export default function index() {
  return (
    <div className="wrapper">
      <div className="containOfType">
        <Button name="MAISON" />
        <Button name="APPARTEMENT" />
      </div>
      <div className="buttOfType">
        <Back />
        <Next />
      </div>
      <div>
        <ProgressBar />
      </div>
    </div>
  );
}
