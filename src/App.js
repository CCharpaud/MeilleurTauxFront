import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";

// conponents
import Footer from "./components/Footer";
import Header from "./components/Header";
import Title from "./components/Title";

// containers
import TypeBien from "./containers/TypeBien";

// style
import "../src/App.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/type-de-bien">
          <Title name="TYPE DE BIEN" />
          <TypeBien />
        </Route>
        {/* <Route path="/etat-du-bien"></Route>
        <Route path="/usage-du-bien"></Route>
        <Route path="/situation-actuelle"></Route>
        <Route path="/ou-se-situe-le-bien"></Route>
        <Route path="/montant-de-projet"></Route>
        <Route path="/coordonnées"></Route>
        <Route path="/formulaire-termine"></Route> */}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
