import React from "react";

import "./style.css";
import "../../App.css";

/* Conponents */
import Title from "../../components/Title";

export default function Final() {
  return (
    <div className="wrapper">
      <div className="titleOfFinal">
        <Title name="ET VOILÀ, LE FORMULAIRE EST TERMINÉ !" />
      </div>
      <div className="containOfFinal">
        <span> Votre numéro de dossier est le : FAKENUMBER </span>
      </div>
    </div>
  );
}
