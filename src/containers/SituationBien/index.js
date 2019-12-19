import React /* { useState } */ from "react";
import Cookies from "js-cookie";
import "./style.css";
import "../../App";

/* Conponents */
import Button from "../../components/Button";
import Next from "../../components/Next";
import Back from "../../components/Back";
import ProgressBar from "../../components/ProgressBar";
import Title from "../../components/Title";
import Information from "../../components/Information";

export default function SituationBien() {
  //   const [choice, setChoice] = useState("");
  //   Cookies.set("usage-du-bien", choice);

  return (
    <div className="wrapper">
      <div className="titleOfSituationLoc">
        <Title name="OÙ SE SITUE LE BIEN À FINANCER ?" />
      </div>

      <div className="containOfSituationLoc"></div>
      <div className="buttOfSituationLoc">
        <Back link="situation-actuelle" />
        <ProgressBar percent="56%" />
        <Next />
      </div>
    </div>
  );
}
