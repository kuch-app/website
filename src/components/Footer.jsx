import React from "react";
import "../public/styles/footer.css"

const navigateToWeb = () => {
    window.location.href = '/web.html';
};

const Footer = () => (
    <div className="navbar-f">
        <div className="navbar-front-f">
        <a href="/website/">
            <h1>KUCH</h1>
        </a>
        </div>
        <div className="navbar-center-f">
            <button class="btn btn-link">FAQ</button>
            <button class="btn btn-link">Süti adatkezelési tájékoztató</button>
            <button class="btn btn-link">Impresszum</button>
            <button class="btn btn-link">Adatkezelési Tájékoztató</button>
        </div>
        <div class="divider-vert"></div>
        <div className="navbar-end-f">
            <button className="btn btn-primary" onClick={navigateToWeb}>Használat böngészőben</button>
            <div className="buttons">
                <button className="btn"><i class="icon icon-download"/>Windows</button>
                <button className="btn"><i class="icon icon-download"/>Linux</button>
                <button className="btn"><i class="icon icon-download"/>MacOS</button>
            </div>
            <div className="buttons">
                <button className="btn disabled"><i class="icon icon-download"/>Android</button>
                <button className="btn disabled"><i class="icon icon-download"/>IOS</button>
            </div>
        </div>
    </div>
);
export default Footer;