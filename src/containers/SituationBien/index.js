import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Axios from "axios";

/* Style */
import "./style.css";
import "../../App";

/* Conponents */
import Next from "../../components/Next";
import Back from "../../components/Back";
import ProgressBar from "../../components/ProgressBar";
import Cities from "../../components/Cities";
import Countries from "../../components/Countries";
import Title from "../../components/Title";

/* Svg Import */
import { UnfoldMore } from "@material-ui/icons";

export default function SituationBien() {
  return (
    <div className="wrapper">
      <div className="titleOfSituationLoc">
        <Title name="OÙ SE SITUE LE BIEN À FINANCER ?" />
      </div>
      <Countries />
      <Cities />

      {Cookies.get("situation-du-bien-pays") === undefined ? (
        <div className="buttOfSituationLoc">
          <Back link="situation-actuelle" />
          <ProgressBar percent="56%" />
          <Next name="Suivant" />
        </div>
      ) : (
        <div className="buttOfSituationLoc">
          <Back link="situation-actuelle" />
          <ProgressBar percent="56%" />
          <Next link="montant-de-projet" name="Suivant" />
        </div>
      )}
    </div>
  );
}
