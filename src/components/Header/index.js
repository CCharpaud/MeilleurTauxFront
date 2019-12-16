import React from "react";
import "../Header/style.css";
import Logo from "../../img/logo.jpg";

export default function Header() {
  return (
    <header>
      <div className="wrapper">
        <div>
          <img className="logo" src={Logo} alt="logo" />
        </div>
        <div className="text">
          <span> Crédit immobilier : 5 mn pour obtenir le meilleur taux </span>
        </div>
      </div>
    </header>
  );
}
