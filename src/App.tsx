import React from "react";

import "./App.css";
import MainHeader from "./components/layout/MainHeader";
import Home from "./pages/Home";


function App() {
  return (
    <div className="app">
      <MainHeader/>
      <Home/>
    </div>
  );
}

export default App;
