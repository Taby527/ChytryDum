import React, { useState } from "react";
import "./style.css";
import blindClosed from "./blinds-closed.svg";
import blindOpen from "./blinds-open.svg";

const imgage = [blindClosed, blindOpen];

const Blinds = () => {
  const [state, setState] = useState(true);
  return (
    <div className="blinds">
      <div className="blinds__icon">
        <img src={state ? blindOpen : blindClosed} alt="Žaluzie" />
      </div>
      <div className="blinds__name">Žaluzie</div>
      <div className="blinds__controls">
        <button
          className={state ? "button button--active" : "button"}
          onClick={() => setState(true)}
        >
          Otevřeno
        </button>
        <button
          className={state ? "button" : "button button--active"}
          onClick={() => setState(false)}
        >
          Zavřeno
        </button>
      </div>
    </div>
  );
};

export default Blinds;
