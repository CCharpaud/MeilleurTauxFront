import React, { useEffect } from "react";
import Cookies from "js-cookie";
import Axios from "axios";

import "./style.css";
import "../../App.css";

/* Conponents */
import Title from "../../components/Title";
import Next from "../../components/Next";

export default function Final() {
  /* Token for number of quotation */
  const quotation = Cookies.get("token");

  /* verifications of all cookies before validation */
  const type = Cookies.get("type-de-bien");
  const etat = Cookies.get("etat-du-bien");
  const usage = Cookies.get("usage-du-bien");
  const situationAct = Cookies.get("situation-actuelle");

  // Page of geographic location
  const ville = Cookies.get("situation-du-bien-ville");
  const pays = Cookies.get("situation-du-bien-pays");

  // Page of amount //
  const montantC = Cookies.get("montant-client");
  const montantT = Cookies.get("montant-travaux");
  const notaire = Cookies.get("notaire");
  const total = Cookies.get("total");

  // Page of email and validate //
  const check = Cookies.get("check");
  const email = Cookies.get("email");

  /* Send all form Informations */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.post(
          "http://localhost:4000/formulaire-termine",
          {
            quotation: quotation
            // type: type,
            // etat: etat,
            // usage: usage,
            // situationAct: situationAct,
            // ville: ville,
            // pays: pays,
            // montantC: montantC,
            // montantT: montantT,
            // notaire: notaire,
            // total: total,
            // check: check,
            // email: email
          }
        );
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="wrapper">
      <div className="titleOfFinal">
        <Title name="ET VOILÀ, LE FORMULAIRE EST TERMINÉ !" />
      </div>
      {quotation === undefined ? (
        <div className="containOfFinal">
          <span>
            Merci de bien vouloir renseigner la totalité du formulaire
          </span>
          <Next name="Recommencer" link="type-de-bien" color="#ff9e23" />
        </div>
      ) : (
        <div className="containOfFinal">
          <span>
            Votre numéro de dossier est le :
            <span className="numberOfQuotation"> {quotation} </span>
          </span>
        </div>
      )}
    </div>
  );
}
