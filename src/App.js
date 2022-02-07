import * as React from "react";
import Navbar from "./component/Navbar";
import Card from "./component/Card";
import List from "./component/List";

function App(props) {
  return (
    <div className="App">
      <Navbar />
      <br />
      <Card />
      <br />
      <List />
    </div>
  );
}

export default App;
