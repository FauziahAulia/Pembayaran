import * as React from "react";
import Card from "./pages/Card";
import Riwayat from "./pages/Riwayat";
import Transfer from "./pages/Transfer";
import Topup from "./pages/Topup";
import Bank from "./pages/Bank";
import Debit from "./pages/Debit";
import Atm from "./pages/Atm";
import Mbanking from "./pages/Mbanking";
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
          <Route path="/debit" component={Debit} />
          <Route path="/atm" component={Atm} />
          <Route path="/mbanking" component={Mbanking} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
