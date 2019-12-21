import React, { useState } from "react";
import Cookies from "js-cookie";

/* Style */
import "./style.css";
import "../../App.css";

/* Conponents */
import Next from "../../components/Next";
import Back from "../../components/Back";
import ProgressBar from "../../components/ProgressBar";
import Information from "../../components/Information";
import Title from "../../components/Title";
import Amount from "../../components/Amount";

export default function Montant() {
  return (
    <div className="wrapper">
      <Title name="DÉFINISSONS LE MONTANT DE VOTRE PROJET ?" />
      <div className="containOfAmount">
        <Amount />
      </div>
      {Cookies.get("montant-client") === "undefined" ? (
        <div className="buttOfBudget">
          <Back link="ou-se-situe-le-bien" />
          <ProgressBar percent="70%" />
          <Next name="Suivant" />
        </div>
      ) : (
        <div className="buttOfBudget">
          <Back link="ou-se-situe-le-bien" />
          <ProgressBar percent="70%" />
          <Next link="coordonnées" name="Suivant" />
        </div>
      )}
    </div>
  );
}
