import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

// conponents
import Footer from "./components/Footer";
import Header from "./components/Header";

// containers
import TypeBien from "./containers/TypeBien";
import EtatBien from "./containers/EtatBien";
import UsageBien from "./containers/UsageBien";
import SituationActuelle from "./containers/SituationActuelle";
import SituationBien from "./containers/SituationBien";
import Montant from "./containers/Montant";
import Coordonnées from "./containers/Coordonnees";
import Final from "./containers/Final";

// style
import "../src/App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/type-de-bien">
          <TypeBien />
        </Route>
        <Route path="/etat-du-bien">
          <EtatBien />
        </Route>
        <Route path="/usage-du-bien">
          <UsageBien />
        </Route>
        <Route path="/situation-actuelle">
          <SituationActuelle />
        </Route>
        <Route path="/ou-se-situe-le-bien">
          <SituationBien />
        </Route>
        <Route path="/montant-de-projet">
          <Montant />
        </Route>
        <Route path="/coordonnées">
          <Coordonnées />
        </Route>
        <Route path="/formulaire-termine">
          <Final />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
