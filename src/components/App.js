import React, { useEffect, useState, useRef } from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

const API = "http://localhost:8003/planeteers"

function App() {

  const [searchItem, setSearchItem] = useState("")
  const [planeteers, setPlaneteers] = useState([])
  const [newPlaneteers, setNewPlaneteers] = useState([])

  function handleSearch(e) {
    setSearchItem(e.target.value)
  }

  function handleRandom(planeteer) {
    setPlaneteers([...planeteers, planeteer])
    setNewPlaneteers([...planeteers, planeteer])
  }

  // console.log(newPlaneteers.slice(newPlaneteers.length - 1, newPlaneteers.length))

  
  useEffect(() => {
    fetch(API).then(res => res.json()).then(setPlaneteers)
  },[])

  const firstUpdate = useRef(true)

  useEffect(() => {

    const newPlaneteer = planeteers.slice(newPlaneteers.length - 1, newPlaneteers.length)
    if(firstUpdate.current) {
      firstUpdate.current = false
    } else {
      fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPlaneteer)
      })
    }
  },[newPlaneteers])


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
