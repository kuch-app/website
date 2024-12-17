import React from "react";
import illSvg from "../public/assets/drawkit-grape-pack-illustration-14.svg";
import "../public/styles/mobile.css"

const Mobile = () => (
    <div className="mobile-container">
        <div className="text-cont">
            <h2>Hamorosan mobilon is!</h2>
            <p className="text-mobile">
                Hamarosan telefonon is előrhető lesz, az egyetlen magyar TOTP azonosító alkalmazás!
                Az alkalmazást úgy fejlesztjük, hogy minnél jobban figyelmbe vegyük az Ön igényeit és könnyen tudja használni.
            </p>
            <div className="button-cont">
                <button className="btn disabled"><i class="icon icon-download"/>Android</button>
                <button className="btn disabled"><i class="icon icon-download"/>IOS</button>
            </div>
        </div>
        <img className="img-1" src={illSvg} alt="" />
    </div>
);
export default Mobile;