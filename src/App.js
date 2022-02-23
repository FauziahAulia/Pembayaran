import * as React from "react";
import Card from "./pages/Card";
import Riwayat from "./pages/Riwayat";
import Transfer from "./pages/Transfer";
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
