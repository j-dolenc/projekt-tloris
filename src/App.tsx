import React from "react";

import "./App.css";
import MainHeader from "./components/layout/MainHeader";
// import Home from "./pages/Home";
import Projekt from "./pages/Projekt";


function App() {
  return (
    <div className="app">
      <MainHeader/>
      {/* <Home/> */}
      <Projekt/>
      
    </div>
  );
}

export default App;
