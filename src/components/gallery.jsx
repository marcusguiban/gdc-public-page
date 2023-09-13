import React, { useEffect } from "react";
import { NavbarMUI } from "./navbar";
import { Stack } from "@mui/material";
import BeforeAndAfter1 from "../images/before&after1.jpg"
import BeforeAndAfter2 from "../images/before&after1.jpg"
import BeforeAndAfter3 from "../images/before&after1.jpg"
import cilinic1 from "../images/One-Lux-Clinic2.jpg"
import cilinic2 from "../images/One-Lux-Clinic3.jpg"
import cilinic3 from "../images/clinic6.jpg"

import { Footer } from "./footer";
import "aos/dist/aos.css";
import Aos from "aos";
export const Gallery = () => {


  useEffect(()=>{
    Aos.init({duration:1000});
},[]);
  return (
<>
<NavbarMUI />
<Stack className="cdsContainer">
      <div className="cds-layer">
<Stack className="cdsHeading">
            <h1 style={{ fontFamily: "   Abril Fatface,sans-serif", letterSpacing: "4px" }}>Gallery</h1>
                <div className="line"></div>
                
            
    </Stack>
    <div id="target-beforeandafter">

    
    <div className="cdsHeading">
    <h2 style={{ fontFamily: "   Abril Fatface,sans-serif", letterSpacing: "4px" }}>BEFORE & AFTER PHOTOS</h2>
    <p>Hover on an image to reveal pre-procedure photos.</p>
    </div>
    </div>
    <div className="gallery-container-img">

      <img src={BeforeAndAfter1} alt="img1" data-aos="fade-up"/>
      <img src={BeforeAndAfter2} alt="img1" data-aos="fade-up"/>
    </div>
    <div className="gallery-container-img">
      <img src={BeforeAndAfter1} alt="img1" data-aos="fade-up"/>
      <img src={BeforeAndAfter2} alt="img1" data-aos="fade-up"/>
    </div>
   

    <div className="cdsHeading">
    <h2 style={{ fontFamily: "   Abril Fatface,sans-serif", letterSpacing: "4px" }}>MORE EXCELLENT RESULTS</h2>
    </div>
    <div className="gallery-container-img">

      <img src={BeforeAndAfter1} alt="img1" data-aos="fade-up"/>
      <img src={BeforeAndAfter2} alt="img1" data-aos="fade-up"/>
    </div>
    <div className="gallery-container-img">
      <img src={BeforeAndAfter1} alt="img1" data-aos="fade-up"/>
      <img src={BeforeAndAfter2} alt="img1" data-aos="fade-up"/>
    </div>
    <div className="gallery-container-img">
      <img src={BeforeAndAfter1} alt="img1" data-aos="fade-up"/>
      <img src={BeforeAndAfter2} alt="img1" data-aos="fade-up"/>
    </div>
    <div className="gallery-container-img">
      <img src={BeforeAndAfter1} alt="img1" data-aos="fade-up"/>
      <img src={BeforeAndAfter2} alt="img1" data-aos="fade-up"/>
    </div>
    <div className="gallery-container-img">
      <img src={BeforeAndAfter1} alt="img1" data-aos="fade-up"/>
      <img src={BeforeAndAfter2} alt="img1" data-aos="fade-up"/>
    </div>
    <div className="gallery-container-img">
      <img src={BeforeAndAfter1} alt="img1" data-aos="fade-up"/>
      <img src={BeforeAndAfter2} alt="img1" data-aos="fade-up"/>
    </div>
    <div className="gallery-container-img">
      <img src={BeforeAndAfter1} alt="img1" data-aos="fade-up"/>
      <img src={BeforeAndAfter3} alt="img1" data-aos="fade-up"/>
    </div>

    <div id="office-target">
        <div className="cdsHeading">
            


          <h2 style={{ fontFamily: "   Abril Fatface,sans-serif", letterSpacing: "4px" }}>OFFICE TOUR</h2>
          </div>
          <div className="office-container-img">
            <img src={cilinic1} alt="img1" data-aos="fade-up"/>
            <img src={cilinic1} alt="img1" data-aos="fade-up"/>
          </div>
          <div className="office-container-img">
            <img src={cilinic2} alt="img1" data-aos="fade-up"/>
            <img src={cilinic3} alt="img1" data-aos="fade-up"/>
          </div>
          <div className="office-container-img">
            <img src={cilinic1} alt="img1" data-aos="fade-up"/>
          </div>
          </div>
    </div>

    </Stack>
<Footer />
</>



  );
};
