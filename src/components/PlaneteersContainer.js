import React, { useState } from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer({planeteers}) {


  return (
    <ul className="cards">
      {planeteers.map(planeteer => (
        <Planeteer 
          planeteer={planeteer}
          key={planeteer.id}
        />
      ))}
    </ul>
  );
}

export default PlaneteersContainer;
