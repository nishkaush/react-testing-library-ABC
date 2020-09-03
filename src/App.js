import React from "react";
import "./App.css";
import Simple from "./components/01.Simple";
import ApiCall from "./components/ApiCall";

function App() {
  return (
    <div className="App">
      <h1>Welcome to RTL Live Coding</h1>
      <Simple text="I am simple" />
      <ApiCall />
    </div>
  );
}

export default App;
