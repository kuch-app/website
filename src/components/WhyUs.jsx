import React from "react";
import illSvg from "../public/assets/pixeltrue-icons-security-1.svg";

const WhyUs  = () => (
    <div className="whyus-container bg-secondary">
        <div className="front-section">
            <h1>Miért a Kuch?</h1>
            <div className="text">
                <p>Minden adat az ön eszközén kerül tárolásra, 
                az alkalmazásnak nincs hozzáférése.</p>
                <p>Egyszerűen használható, magyar nyelvű 
                alkalmazás, kifejezetten az <span style={{ color: '#469cff' }}>Ügyfélkapu+ </span>
                támogatására fejlesztve.</p>
                <p>Open Source! <br /> 
                A Kuch kódja nyilvánosan elérhető. 
                Teljesen harmadik féltől származik, 
                politikai vonzatoktól mentes.</p>
            </div>
            <img className="img-shield" src={illSvg} alt="" />
        </div>
    </div>
);
export default WhyUs;