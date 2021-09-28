import React from "react";
import "reflect-metadata";
import "./App.css";
import MainHeader from "./components/layout/MainHeader";
 import Home from "./pages/Home";
import Modal from "./pages/Modal";
import Projekt from "./pages/Projekt";
import LoginContextProvider from "./store/login-context";


function App() {
  return (
    <LoginContextProvider>
    <div className="app">
      <MainHeader/>
      <Home/>
      {/* <Projekt/> */}
      <Modal/>
    </div>
    </LoginContextProvider>
  );
}

export default App;
