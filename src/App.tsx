import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Contatos from "./components/Contatos/Contatos";
import Sobre from "./components/Sobre/Sobre";

function App() {
  return (
    <>
      <main className="main">
        <Header />
        
      </main>
      <Contatos/>
      <Sobre/>
    </>
  );
}

export default App;
