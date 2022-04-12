import React from "react";
import "./style.css";
import Light from "../light/light";
import Climate from "../climate/climate";
import Blinds from "../blinds/blinds";
import Energy from "../energy/energy";
import Lights from "../lights/lights";

const climate = [{ temperature: 24, humidity: 50 }];
const energy = [{ electricity: 36.7, water: 14.1 }];

const Dashboard = () => {
  return (
    <main className="dashboard">
      <Lights />
      {climate.map((data) => (
        <Climate temperature={data.temperature} humidity={data.humidity} />
      ))}
      <Blinds state="open" />
      {energy.map((data) => (
        <Energy electricity={data.electricity} water={data.water} />
      ))}
    </main>
  );
};

export default Dashboard;
