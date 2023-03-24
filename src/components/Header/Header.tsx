import React, { useState } from "react";
import './Header.css'
import shoeLogo from '../assets/shoe-logo.png'

const Header = () => {
  const [toggle, setToggle] = useState(true)
  
  return (
    <header className={toggle ? "header-container" : "header-container_toggle"} >
      <div className="header-logo">
        <img className="header-img" src={shoeLogo} alt="" />
      </div>
      <ul className="header-ul">
        <span onClick={() => setToggle(!toggle)} className="ul-icon">
            <i className='bx bx-list-ul'></i>
        </span>
        <li className="header-li"><a href="#home">Home</a></li>
        <li className="header-li"><a href="#contatos">Contatos</a></li>
        <li className="header-li"><a href="#sobre">Sobre</a></li>
        <li className="header-li"><a href="#encontre">Encontre</a></li>
      </ul>
    </header>
  );
};

export default Header;
