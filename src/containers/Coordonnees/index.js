import React, { useState } from "react";
import Cookies from "js-cookie";
import "./style.css";
import "../../App.css";

/* Conponents */
import Back from "../../components/Back";
import Next from "../../components/Next";
import ProgressBar from "../../components/ProgressBar";
import Title from "../../components/Title";
import Information from "../../components/Information";
import Email from "../../img/email.jpg";
import Stamp from "../../img/stamp.png";

export default function Coordonnees() {
  const [checkbox, setCheckbox] = useState(false);
  const [email, setEmail] = useState("");
  console.log(email);
  console.log(checkbox);

  return (
    <div className="wrapper">
      <div className="titleOfContact">
        <Title name="VOS COORDONNÉES" />
      </div>
      <div className="containOfContact">
        <div className="topOfContact">
          <span>
            Un devis vous sera envoyé par mail avec un récapitulatif de votre
            demande.
          </span>
          <img src={Email} alt="logo of email" />
        </div>
      </div>
      <form>
        <div className="middleOfContact">
          <div className="titleOfEmailInput">
            <span> Adresse e-mail emprunteur* </span>
          </div>
          <label>
            <div className="emailInput">
              <Information
                tooltip="Saisissez votre adresse e-mail de contact "
                placement="left"
              />
              <input
                id="email"
                type="email"
                name="emailaddress"
                className="emailInput"
                onChange={event => {
                  setEmail(event.target.value);
                }}
              />
            </div>
          </label>
          <img className="stamp" src={Stamp} alt="Secure Stamp" />
        </div>

        <label>
          <div className="checkPart">
            <input
              id="checkbox"
              type="checkbox"
              className="checkboxInput"
              value={checkbox}
              onClick={() => {
                setCheckbox(!checkbox);
              }}
            />
            <span>
              J'accepte de recevoir par email des propositions de Meilleurtaux.
            </span>
          </div>
        </label>
        <input type="submit" />

        {Cookies.get("etat-du-bien") === "" ? (
          <div className="buttOfEmail">
            <Back link="montant-de-projet" />
            <ProgressBar percent="84%" />
            <Next name="Valider" type="submit" />
          </div>
        ) : (
          <div className="buttOfEmail">
            <Back link="montant-de-projet" />
            <ProgressBar percent="84%" />
            <Next name="Valider" link="formulaire-termine" type="submit" />
          </div>
        )}
      </form>
    </div>
  );
}
