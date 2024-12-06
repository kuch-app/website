import React from "react";

import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import WhyUs from "./components/WhyUs";
import Footer from "./components/Footer";

import "./public/styles/main.css"

export default () => (
  <>
    <Navbar/>
    <Landing/>
    <WhyUs/>
    <Footer/>
  </>
);
