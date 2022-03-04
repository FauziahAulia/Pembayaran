import * as React from "react";
import Card from "./pages/Card";
import Riwayat from "./pages/Riwayat";
import Transfer from "./pages/Transfer";
import Topup from "./pages/Topup";
import Bank from "./pages/Bank";
import Atm from "./pages/Atm";
// react router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Card} />
          <Route path="/riwayat" component={Riwayat} />
          <Route path="/transfer" component={Transfer} />
          <Route path="/topup" component={Topup} />
          <Route path="/bank" component={Bank} />
          <Route path="/atm" component={Atm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
