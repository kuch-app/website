import React from "react";
import "../public/styles/navbar.css"

const navigateToWeb = () => {
    window.location.href = '/web.html';
};

const Navbar = () => (
    <div className="navbar">
        <div className="navbar-front">
        <a href="/">
            <h1>KUCH</h1>
        </a>
        </div>
        <div className="navbar-center">
        </div>
        <div className="navbar-end">
            <button className="main-button" onClick={navigateToWeb}>Használat böngészőben</button>
            <button>Alkalmazás letöltése</button>
        </div>
    </div>
);
export default Navbar;