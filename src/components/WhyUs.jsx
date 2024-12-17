import React from "react";
import illSvg from "../public/assets/drawkit-grape-pack-illustration-8.svg";
import illSvg2 from "../public/assets/drawkit-grape-pack-illustration-10.svg";
import "../public/styles/whyus.css"

const WhyUs  = () => (
    <div className="whyus-container bg-secondary">
        <div className="front-section">
            <h1 className="text-primary mh1">Miért a Kuch?</h1>
            <div className="row">
                <div className="text">
                    <p>Minden adat az ön eszközén kerül tárolásra, 
                    az alkalmazásnak nincs hozzáférése.</p>
                    <p>Egyszerűen használható, magyar nyelvű 
                    alkalmazás, kifejezetten az <span style={{ color: '#5755d9' }}>Ügyfélkapu+ </span>
                    támogatására fejlesztve.</p>
                </div>
                <img className="img-1" src={illSvg} alt="" />
            </div>
            <div className="row">
                <img className="img-1" src={illSvg2} alt="" />
                <div className="text">
                    <p>Open Source! <br /> 
                    A Kuch kódja nyilvánosan elérhető. 
                    Teljesen harmadik féltől származik, 
                    politikai vonzatoktól mentes.</p>
                </div>
            </div>
        </div>
    </div>
);
export default WhyUs;