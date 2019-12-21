import React, { useState } from "react";
import Cookies from "js-cookie";

/* Styles */
import "./style.css";
import "../../App";

/* Conponents */
import Button from "../../components/Button";
import Next from "../../components/Next";
import ProgressBar from "../../components/ProgressBar";
import Title from "../../components/Title";
import Information from "../../components/Information";

export default function TypeBien() {
  const [choice, setChoice] = useState("");
  Cookies.set("type-de-bien", choice);

  return (
    <div className="wrapper">
      <div className="titleOfType">
        <Title name="TYPE DE BIEN" />
        <Information
          tooltip="Sélectionnez le type de bien que vous souhaitez faire Financer"
          placement="right"
        />
      </div>
      <div className="containOfType">
        <Button
          name="Maison"
          value="Maison"
          id="choix1"
          cat="typeDeBien"
          choice={choice}
          setChoice={setChoice}
        />
        <Button
          name="Appartement"
          value="Appartement"
          id="choix2"
          cat="typeDeBien"
          choice={choice}
          setChoice={setChoice}
        />
      </div>
      {Cookies.get("type-de-bien") === "" ? (
        <div className="buttOfType">
          <span style={{ paddingLeft: "40%" }} />
          <ProgressBar percent="0%" />
          <Next name="Suivant" />
        </div>
      ) : (
        <div className="buttOfType">
          <span style={{ paddingLeft: "40%" }} />
          <ProgressBar percent="0%" />
          <Next link="etat-du-bien" name="Suivant" />
        </div>
      )}
    </div>
  );
}
