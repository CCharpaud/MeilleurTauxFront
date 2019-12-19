import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

// conponents
import Footer from "./components/Footer";
import Header from "./components/Header";
import Title from "./components/Title";

// containers
import TypeBien from "./containers/TypeBien";
import EtatBien from "./containers/EtatBien";
import UsageBien from "./containers/UsageBien";
import SituationActuelle from "./containers/SituationActuelle";
import SituationBien from "./containers/SituationBien";

// style
import "../src/App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/type-de-bien">
          <Title
            name="TYPE DE BIEN"
            tooltip="Sélectionnez le type de bien que vous souhaitez faire Financer."
          />
          <TypeBien />
        </Route>
        <Route path="/etat-du-bien">
          <Title
            name="ETAT DU BIEN"
            tooltip="Sélétionnez l'état du bien Neuf ou Ancien"
          />
          <EtatBien />
        </Route>
        <Route path="/usage-du-bien">
          <Title
            name="USAGE DU BIEN"
            tooltip="Sélétionnez l'usage du bien que vous souhaitez faire Financer"
          />
          <UsageBien />
        </Route>

        <Route path="/situation-actuelle">
          <Title
            name="VOTRE SITUATION ACTUELLE"
            tooltip="Sélétionnez votre situation personnelle"
          />
          <SituationActuelle />
        </Route>
        <Route path="/ou-se-situe-le-bien">
          <Title
            name="OÙ SE SITUE LE BIEN À FINANCER ?"
            // tooltip="Sélétionnez votre situation personnelle"
          />
          <SituationBien />
        </Route>

        {/*
        <Route path="/montant-de-projet"></Route>
        <Route path="/coordonnées"></Route>
        <Route path="/formulaire-termine"></Route> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
