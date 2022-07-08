import React from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

const API = "http://localhost:8003/planeteers"

function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <RandomButton />
      <PlaneteersContainer />
    </div>
  );
}

export default App;
