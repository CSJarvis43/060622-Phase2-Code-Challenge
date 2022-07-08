import React from "react";
import { getRandomPlaneteer } from "../data/planeteers";

function RandomButton({handleRandom}) {
  // function handleClick() {
  //   const randomPlaneteer = getRandomPlaneteer();
  //   console.log("For the advanced deliverables", randomPlaneteer);
  // }

  return (
    <div className="centered">
      <button onClick={() => handleRandom(getRandomPlaneteer())} id="random-planeteer">
        Click to Show a Random Planeteer
      </button>
    </div>
  );
}

export default RandomButton;
