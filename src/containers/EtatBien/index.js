import React, { useState } from "react";
import Cookies from "js-cookie";
import "./style.css";
import "../../App";

/* Conponents */
import Button from "../../components/Button";
import Back from "../../components/Back";
import Next from "../../components/Next";
import ProgressBar from "../../components/ProgressBar";
import Title from "../../components/Title";
import Information from "../../components/Information";

export default function EtatBien() {
  const [choice, setChoice] = useState("");
  Cookies.set("etat-du-bien", choice);

  return (
    <div className="wrapper">
      <div className="titleOfState">
        <Title name="ETAT DU BIEN" />
        <Information
          tooltip="Sélétionnez l'état du bien Neuf ou Ancien"
          placement="right"
        />
      </div>

      <div className="containOfUse">
        <Button
          name="Ancien"
          value="Ancien"
          id="choix1"
          cat="etatDuBien"
          choice={choice}
          setChoice={setChoice}
        />
        <Button
          name="Neuf"
          value="Neuf"
          id="choix2"
          cat="etatDuBien"
          choice={choice}
          setChoice={setChoice}
        />
      </div>
      {Cookies.get("etat-du-bien") === "" ? (
        <div className="buttOfUse">
          <Back link="type-de-bien" />
          <ProgressBar percent="14%" />
          <Next />
        </div>
      ) : (
        <div className="buttOfUse">
          <Back link="type-de-bien" />
          <ProgressBar percent="14%" />
          <Next link="usage-du-bien" />
        </div>
      )}
    </div>
  );
}
