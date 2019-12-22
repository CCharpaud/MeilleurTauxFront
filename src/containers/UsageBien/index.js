import React, { useState } from "react";
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

export default function UsageBien() {
  const [choice, setChoice] = useState("");
  Cookies.set("usage-du-bien", choice);

  return (
    <div className="wrapper">
      <div className="titleOfUse">
        <Title name="USAGE DU BIEN" />
        <Information
          tooltip="Sélétionnez l'usage du bien que vous souhaitez faire Financer"
          placement="right"
        />
      </div>

      <div className="containOfUse">
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
        <div className="buttOfUse">
          <Back link="etat-du-bien" />
          <ProgressBar percent="28%" />
          <Next name="Suivant" color="rgba(192,192,192,0.3)" />
        </div>
      ) : (
        <div className="buttOfUse">
          <Back link="etat-du-bien" />
          <ProgressBar percent="28%" />
          <Next link="situation-actuelle" name="Suivant" color="#ff9e23" />
        </div>
      )}
    </div>
  );
}
