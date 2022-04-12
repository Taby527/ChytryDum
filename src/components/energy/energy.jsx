import React from "react";
import "./style.css";
import image1 from "./electricity.svg";
import image2 from "./water.svg";

const image = [image1, image2];

const Energy = ({ electricity, water }) => {
  return (
    <div className="energy">
      <div className="energy__source">
        <div className="energy__icon">
          <img src={image1} alt="obrázek1" />
        </div>
        <div className="energy__consumption">
          <div className="energy__description">Elektřina</div>
          <div className="energy__value">{electricity} kW</div>
        </div>
      </div>
      <div className="energy__source">
        <div className="energy__icon">
          <img src={image2} alt="obrázek2" />
        </div>
        <div className="energy__consumption">
          <div className="energy__description">Voda</div>
          <div className="energy__value">
            {water} m<sup>3</sup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Energy;
