import React, { useState } from "react";
import off from "./light-off.svg";
import on from "./light-on.svg";
import "./style.css";

const image = [off, on];

const Light = ({ name, state }) => {
  const [stav, setStav] = useState({ state });

  return (
    <div className="light" onClick={() => setStav(!stav)}>
      <div className="light__icon">
        <img src={stav ? on : off} alt="stvětlo" />
      </div>
      <div className="light__name">{name} </div>
    </div>
  );
};

export default Light;
