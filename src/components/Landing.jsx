import React from "react";
import "../public/styles/landing.css"
import illSvg from "../public/assets/ill.svg";

const navigateToWeb = () => {
    window.location.href = '/web.html';
};

const Landing = () => (
    <div className="landing-page">
        <div className="landing">
            <img className="landing-img" src={illSvg} alt="Illustration" />
            <div className="text-section">
                <h1 className="landing-title">KUCH!</h1>
                <h2 className="landing-text">Biztonságos azonosítás egyszerűen – mert az Ön ideje és biztonsága a legfontosabb!</h2>
            </div>
        </div>
        <div className="button-section">
            <button onClick={navigateToWeb} className="main-button">Használat böngészőben</button>
            <button className="secondary-button">Alkalmazás letöltése</button>
        </div>
    </div>
);
export default Landing;