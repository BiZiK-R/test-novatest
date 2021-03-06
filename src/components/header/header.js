import React from 'react';
//import logo from '%PUBLIC_URL%/img/logo.png'
import './header.sass';

const Header = () => {
  return (
    <div className="Header">
        <div className="left">
            <h1>DEADPOOL</h1>
            <h3>2016</h3>
            <h3>USA</h3>
            <h3 className="color-pink">18+</h3>
        </div>
        <div className="right">
            <img src='/img/logo.png' alt={"logo"}/>
            <h2 className="color-pink">spike</h2>
            <ul className="menu">
                <li>
                    <a>Все кино</a>
                </li>
                <li>
                    <a>Рейтинги</a>
                </li>
                <li>
                    <a>Общение</a>
                </li>
                <li>
                    <a>Войти</a>
                </li>
            </ul>
        </div>
        <img className="background-header" src='/img/background_header.png' alt={"Deadpool love you"}/>
    </div>
  );
}

export default Header;