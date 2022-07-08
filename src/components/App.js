import React, { useEffect, useState } from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

const API = "http://localhost:8003/planeteers"

function App() {

  const [searchItem, setSearchItem] = useState("")

  function handleSearch(e) {
    setSearchItem(e.target.value)
  }

  // console.log(searchItem)

  const [planeteers, setPlaneteers] = useState([])
  
  useEffect(() => {
    fetch(API).then(res => res.json()).then(setPlaneteers)
  },[])


  return (
    <div>
      <Header />
      <SearchBar handleSearch={handleSearch} searchItem={searchItem}/>
      <RandomButton />
      <PlaneteersContainer planeteers={planeteers} searchItem={searchItem}/>
    </div>
  );
}

export default App;
