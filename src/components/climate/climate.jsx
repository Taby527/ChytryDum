import React, { useState } from "react";
import temp from "./temp.svg";
import "./style.css";

const image = [temp];

const Climate = ({ humidity }) => {
  const [temperature, setTemperature] = useState(24);
  return (
    <div className="climate">
      <div className="climate__icon">
        <img src={temp} alt="obrázek teploměru" />
      </div>
      <div className="climate__content">
        <div className="climate__temperature">{temperature}&deg;C</div>
        <div className="climate__humidity">
          Vlhkost vzduchu {humidity}&nbsp;%
        </div>
      </div>
      <div className="climate__controls">
        <button
          className="button"
          onClick={() => setTemperature(temperature + 1)}
        >
          +
        </button>
        <button
          className="button"
          onClick={() => setTemperature(temperature - 1)}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Climate;
