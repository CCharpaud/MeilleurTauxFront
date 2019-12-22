import React, { useState, useEffect } from "react";
import Axios from "axios";
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
  const [token, setToken] = useState("");
  Cookies.set("type-de-bien", choice);

  if (Cookies.get("token") === undefined || "undefined") {
    Cookies.set("token", token);
  }

  /* Init new Token */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get("http://localhost:4000/type-de-bien");
        setToken(response.data.token);
        console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

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
          <Next name="Suivant" color="rgba(192,192,192,0.3)" />
        </div>
      ) : (
        <div className="buttOfType">
          <span style={{ paddingLeft: "40%" }} />
          <ProgressBar percent="0%" />
          <Next link="etat-du-bien" name="Suivant" color="#ff9e23" />
        </div>
      )}
    </div>
  );
}
