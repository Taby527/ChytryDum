import React from "react";
import { render } from "react-dom";
import "./style.css";
import Header from "./components/header/header";
import Dashboard from "./components/dashboard/dashboard";

const App = () => (
  <div className="container">
    <Header title="Chytrý dům" />
    <Dashboard />
  </div>
);

render(<App />, document.querySelector("#app"));
