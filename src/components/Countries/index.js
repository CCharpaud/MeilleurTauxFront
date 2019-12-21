import React, { useState } from "react";
import Cookies from "js-cookie";

/* Style */
import "./style.css";
import "../../App";

/* Conponents */
import Information from "../../components/Information";

/* Svg Import */
import { UnfoldMore } from "@material-ui/icons";

export default function Countries() {
  const [countries, setCountries] = useState("");
  Cookies.set("situation-du-bien-pays", countries);

  const handleChangeCountries = event => {
    setCountries(event.target.value);
  };

  return (
    <div className="firstdropOfSituationLoc">
      <div className="titleSelectOfSituationLoc">
        <span> Dans quel pays se situe votre projet ?* </span>
      </div>
      <div className="selectOfSituationOfLoc">
        <Information
          tooltip="France : Il s'agit de l'ensemble des territoires Francais DOM/TOM inculs"
          placement="top"
        />

        <select className="dropCountries" onChange={handleChangeCountries}>
          <option disabled selected>
            Sélectionnez un pays
          </option>
          <option value="France">FRANCE</option>
          <option disabled> --- Pays bientôt disponibles --- </option>
          <option disabled value="Belgique">
            BELGIQUE
          </option>
          <option disabled value="Suisse">
            SUISSE
          </option>
        </select>
        <span className="arrow">
          <UnfoldMore />
        </span>
      </div>
    </div>
  );
}
