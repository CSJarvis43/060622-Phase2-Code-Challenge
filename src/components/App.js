import React, { useEffect, useState } from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

const API = "http://localhost:8003/planeteers"

function App() {

  const [searchItem, setSearchItem] = useState("")
  const [planeteers, setPlaneteers] = useState([])
  // const [planeteerId, setPlaneteerId] = useState(9)

  function handleSearch(e) {
    setSearchItem(e.target.value)
  }

  function handleRandom(planeteer) {
    setPlaneteers([...planeteers, planeteer])
  }

  // console.log(planeteers)

  
  useEffect(() => {
    fetch(API).then(res => res.json()).then(setPlaneteers)
  },[])

  // useEffect(() => {

  //   const newPlaneteer = planeteers.slice(planeteers.length - 2, planeteers.length - 1)

  //   fetch(API, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(newPlaneteer)
  //   })
  // },[planeteers])


  return (
    <div>
      <Header />
      <SearchBar handleSearch={handleSearch} searchItem={searchItem}/>
      <RandomButton handleRandom={handleRandom}/>
      <PlaneteersContainer planeteers={planeteers} searchItem={searchItem}/>
    </div>
  );
}

export default App;
