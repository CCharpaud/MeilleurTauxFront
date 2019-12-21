import React, { useState } from "react";
import Cookies from "js-cookie";

/* Style */
import "./style.css";
import "../../App.css";

/* Conponents */
import Information from "../../components/Information";

export default function Amount() {
  const [acquisitionAmount, setAcquisitionAmount] = useState();
  const [workAmount, setWorkAmount] = useState(0);

  const totalNew =
    parseFloat(acquisitionAmount) +
    (parseFloat(acquisitionAmount) * 1.8) / 100 +
    parseFloat(workAmount);

  const totalOld =
    parseFloat(acquisitionAmount) +
    (parseFloat(acquisitionAmount) * 7.38) / 100 +
    parseFloat(workAmount);

  const notaryforNew =
    parseFloat(totalNew) -
    parseFloat(workAmount) -
    parseFloat(acquisitionAmount);

  const notaryforOld =
    parseFloat(totalOld) -
    parseFloat(workAmount) -
    parseFloat(acquisitionAmount);

  // Section for Save Cookies //

  if (Cookies.get("etat-du-bien") === "Ancien") {
    Cookies.set("total", totalOld);
  } else {
    Cookies.set("total", totalNew);
  }

  if (Cookies.get("etat-du-bien") === "Ancien") {
    Cookies.set("notaire", notaryforOld);
  } else {
    Cookies.set("notaire", notaryforNew);
  }

  Cookies.set("montant-client", acquisitionAmount);
  Cookies.set("montant-travaux", workAmount);

  return (
    <div className="wrapper">
      <form className="form">
        <div className="firstPart">
          <div className="TitleOfAcquisitionAmount">
            <span> Montant estimé de votre acquisition* </span>
          </div>
          <label>
            <div className="firstInput">
              <Information
                tooltip="Saisissez le montant de l'acquisition "
                placement="left"
              />
              <input
                id="acquisitionInputAmount"
                type="number"
                className="acquisitionInputAmount"
                onChange={event => {
                  setAcquisitionAmount(event.target.value);
                }}
              />
              <span> € </span>
              <span> {acquisitionAmount} </span>
            </div>
          </label>
        </div>
        <div className="secondPart">
          <div className="TitleOfWorkAmount">
            <span> Montant estimé des travaux </span>
          </div>
          <label>
            <div className="secondInput">
              <Information
                tooltip="Saisissez le montant des travaux "
                placement="left"
              />
              <input
                id="workInputAmount"
                type="number"
                className="workInputAmount"
                onChange={event => {
                  setWorkAmount(event.target.value);
                }}
              />
              <span> € </span>
              <span> {workAmount} </span>
            </div>
          </label>
        </div>

        <div className="thirdPart">
          <div className="TitleOfNotaryFees">
            <span> Frais de notaire </span>
          </div>
          {Cookies.get("etat-du-bien") === "Ancien" ? (
            <label>
              <div className="thirdInput">
                <Information
                  tooltip="Estimation de vos frais de Notaire - Champ non modifiable"
                  placement="left"
                />
                <input
                  id="notaryInputFees"
                  type="number"
                  className="notaryInputFees"
                  disabled="disabled"
                  value={Math.floor(notaryforOld)}
                />
                <span> € </span>
              </div>
            </label>
          ) : (
            <label>
              <div className="thirdInput">
                <Information
                  tooltip="Estimation de vos frais de Notaire - Champ non modifiable"
                  placement="left"
                />
                <input
                  id="notaryInputFees"
                  type="number"
                  className="notaryInputFees"
                  disabled="disabled"
                  value={Math.floor(notaryforNew)}
                />
                <span> € </span>
              </div>
            </label>
          )}
        </div>

        <div className="fourthPart">
          <div className="titleOfTotalBudget">
            <span> Budget total estimé du projet </span>
          </div>

          {Cookies.get("etat-du-bien") === "Ancien" ? (
            <label>
              <div className="fourthInput">
                <Information
                  tooltip="Estimation du budget total du projet - Champ non modifiable"
                  placement="left"
                />
                <input
                  id="totalInputBudget"
                  type="number"
                  className="totalInputBudget"
                  disabled="disabled"
                  value={Math.round(totalOld)}
                />
                <span> € </span>
              </div>
            </label>
          ) : (
            <label>
              <div className="fourthInput">
                <Information
                  tooltip="Estimation du budget total du projet - Champ non modifiable"
                  placement="left"
                />
                <input
                  id="totalInputBudget"
                  type="number"
                  className="totalInputBudget"
                  disabled="disabled"
                  value={Math.round(totalNew)}
                />
                <span> € </span>
              </div>
            </label>
          )}
        </div>
      </form>
    </div>
  );
}
