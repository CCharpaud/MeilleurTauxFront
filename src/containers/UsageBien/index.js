import React, { useState } from "react";
import Cookies from "js-cookie";
import "./style.css";
import "../../App";

/* Conponents */
import Button from "../../components/Button";
import Next from "../../components/Next";
import Back from "../../components/Back";
import ProgressBar from "../../components/ProgressBar";

export default function UsageBien() {
  const [choice, setChoice] = useState("");
  Cookies.set("usage-du-bien", choice);

  return (
    <div className="wrapper">
      <div className="containOfType">
        <Button
          name="Résidence princiaple"
          value="Residence-principale"
          id="choix1"
          cat="usageDuBien"
          choice={choice}
          setChoice={setChoice}
        />
        <Button
          name="Résidence secondaire"
          value="Residence-secondaire"
          id="choix2"
          cat="usageDuBien"
          choice={choice}
          setChoice={setChoice}
        />
        <Button
          name="Investissement Locatif"
          value="Investissement-locatif"
          id="choix3"
          cat="usageDuBien"
          choice={choice}
          setChoice={setChoice}
        />
      </div>
      {Cookies.get("usage-du-bien") === "" ? (
        <div className="buttOfType">
          <Back link="etat-du-bien" />
          <ProgressBar percent="28%" />
          <Next />
        </div>
      ) : (
        <div className="buttOfType">
          <Back link="etat-du-bien" />
          <ProgressBar percent="28%" />
          <Next link="situation-actuelle" />
        </div>
      )}
    </div>
  );
}