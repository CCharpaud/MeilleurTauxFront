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

export default function SituationActuelle() {
  const [choice, setChoice] = useState("");
  Cookies.set("situation-actuelle", choice);

  return (
    <div className="wrapper">
      <div className="titleOfSituation">
        <Title name="VOTRE SITUATION ACTUELLE" />
        <Information
          tooltip="Sélétionnez votre situation personnelle"
          placement="right"
        />
      </div>

      <div className="containOfSituation">
        <Button
          name="Locataire"
          value="Locataire"
          id="choix1"
          cat="situationActuelle"
          choice={choice}
          setChoice={setChoice}
        />
        <Button
          name="Propriétaire"
          value="Proprietaire"
          id="choix2"
          cat="situationActuelle"
          choice={choice}
          setChoice={setChoice}
        />
        <Button
          name="Béneficiaire d'un logement de fonction"
          value="Beneficiaire-d-un-logement-de-fonction"
          id="choix3"
          cat="situationActuelle"
          choice={choice}
          setChoice={setChoice}
        />
        <Button
          name="Hébergé à titre gratuit"
          value="Heberge-a-titre-gratuit"
          id="choix4"
          cat="situationActuelle"
          choice={choice}
          setChoice={setChoice}
        />
      </div>
      {Cookies.get("situation-actuelle") === "" ? (
        <div className="buttOfSituation">
          <Back link="usage-du-bien" />
          <ProgressBar percent="42%" />
          <Next />
        </div>
      ) : (
        <div className="buttOfSituation">
          <Back link="usage-du-bien" />
          <ProgressBar percent="42%" />
          <Next link="ou-se-situe-le-bien" />
        </div>
      )}
    </div>
  );
}
