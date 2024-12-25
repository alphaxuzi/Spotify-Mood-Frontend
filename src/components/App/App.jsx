
import "./App.css";
import React from "react";
import { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedFruit, setSelectedFruit] = useState(null);
  

  const onClose = () => {
    setActiveModal("");
  };

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleRegisterClick = () => {
    setActiveModal("register");
  };

  const handleFruitSelect = (fruit) => {
    setSelectedFruit(fruit);
  };

  return (
    <>
      <Header
        handleLoginClick={handleLoginClick}
        handleRegisterClick={handleRegisterClick}
      />
      <Main
        onFruitSelect={handleFruitSelect}
        selectedFruit={selectedFruit}
        
      />
      <Footer />
      <LoginModal activeModal={activeModal === "login"} onClose={onClose} />
      <RegisterModal
        activeModal={activeModal === "register"}
        onClose={onClose}
      />
    </>
  );
}

export default App;
