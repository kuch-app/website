import React from "react";
import illSvg from "../public/assets/mockup.png";
import "../public/styles/landing.css"

const navigateToWeb = () => {
    window.location.href = '/website/web.html';
};

const Landing = () => (
    <div className="landing-page">
        <h1 className="landing-text"> <span style={{ color: '#5755d9' }}>Biztonságos</span> azonosítás egyszerűen – <br/>mert az Ön ideje és biztonsága a legfontosabb!
        </h1>
        <div className="buttons">
            <button className="btn btn-primary btn-lg" onClick={navigateToWeb}>Használat böngészőben</button>
            <button className="btn btn-lg">Alkalmazás letöltése</button>
        </div>
        <img className="landing-img" src={illSvg} alt="Illustration" />
    </div>
);
export default Landing;