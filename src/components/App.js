import React, { useEffect, useState } from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

const API = "http://localhost:8003/planeteers"

function App() {

  const [planeteers, setPlaneteers] = useState([])

  useEffect(() => {
    fetch(API).then(res => res.json()).then(setPlaneteers)
  },[])


  return (
    <div>
      <Header />
      <SearchBar />
      <RandomButton />
      <PlaneteersContainer planeteers={planeteers}/>
    </div>
  );
}

export default App;
