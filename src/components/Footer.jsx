import React from "react";

const navigateToWeb = () => {
    window.location.href = '/web.html';
};

const Footer = () => (
    <div className="navbar">
        <div className="navbar-front">
        <a href="/">
            <h1>KUCH</h1>
        </a>
        </div>
        <div className="navbar-center">
            <a onClick={navigateToWeb}>A Kuchról</a>
            <a onClick={navigateToWeb}>FAQ</a>
            <a onClick={navigateToWeb}>Adatkezelési Tájékoztató</a>
        </div>
        <div className="navbar-end">
            <button className="main-button" onClick={navigateToWeb}>Használat böngészőben</button>
            <button>Alkalmazás letöltése</button>
        </div>
    </div>
);
export default Footer;