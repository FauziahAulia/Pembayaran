import * as React from "react";
import Navbar from "./pages/Navbar";
import Card from "./pages/Card";
import List from "./pages/List";

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
