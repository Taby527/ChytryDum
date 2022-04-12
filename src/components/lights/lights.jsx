import React from "react";
import "./style.css";
import Light from "../light/light";

const lights = [
  { name: "Obývací pokoj", state: "off" },
  { name: "Ložnice", state: "on" },
  { name: "Kuchyně", state: "on" },
  { name: "Chodba", state: "off" },
];

const Lights = () => {
  return (
    <div className="lights">
      {lights.map((data) => (
        <Light key={data.name} name={data.name} state={data.state} />
      ))}
    </div>
  );
};

export default Lights;
