import React from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer({planeteers, searchItem}) {

  const filteredPlaneteers = planeteers
  .filter(planeteer => planeteer.name.toLowerCase().includes(searchItem.toLowerCase()))

  // console.log(filteredPlaneteers)

  return (
    <ul className="cards">
      {filteredPlaneteers.map(planeteer => (
        <Planeteer 
          planeteer={planeteer}
          key={planeteer.id}
        />
      ))}
    </ul>
  );
}

export default PlaneteersContainer;
