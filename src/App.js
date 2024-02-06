// import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [getValue, setValue] = useState("");

  const changeButton = () => {
    setValue("My Button");
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <Navbar />
        <p>Halo guys saya lagi belajar react js</p>
        <Button />
        <Footer />
        <p>{getValue}</p>
        <button onClick={() => changeButton()}>Click Here!</button>
      </header>
    </div>
  );
}

export default App;
