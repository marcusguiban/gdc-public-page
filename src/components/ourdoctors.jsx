import React, { useEffect } from "react";
import { NavbarMUI } from "./navbar";
import { Grid, Stack,   } from "@mui/material";
import DrZee from "../images/DrZee.jpg"
import doctor1 from "../images/doc3.jpeg"
import DrBel from "../images/One-Lux-Dr_Bel.jpg"
import doctor2 from "../images/doc2.jpg"

import { Footer } from "./footer";
import "aos/dist/aos.css";
import Aos from "aos";

export const OurDoctors = () => {



  useEffect(()=>{
    Aos.init({duration:1000});
},[]);
  return (
<>
<NavbarMUI />
<Stack className="bg-container">
      <div className="doctors-layer">
    <Stack className="doctors-heading">
        <h1 style={{ fontFamily: "   Abril Fatface,sans-serif", letterSpacing: "4px" }}>Our Doctors</h1>
            <div className="line"></div>
        </Stack>

    <Grid className="doctors-container" container>
    
        <Grid className="doctor" item xs={6} sm={6} md={3} lg={3} data-aos="fade-up"data-aos-duration="500">
            <img src={DrZee} alt="Doctor 1" />
            <div className="info">
            <h3>Dr. Zandra Guiban</h3>
            <p>Cardiologist</p>
            </div>
        </Grid>
        <Grid className="doctor" item xs={6} sm={6} md={3} lg={3} data-aos="fade-up"data-aos-duration="650">
            <img src={doctor1} alt="Doctor 2" />
            <div className="info">
            <h3>Dr. Jane Smith</h3>
            <p>Pediatrician</p>
            </div>
        </Grid>
        <Grid className="doctor" item xs={6} sm={6} md={3} lg={3} data-aos="fade-up"data-aos-duration="800">
            <img src={DrBel} alt="Doctor 3" />
            <div className="info">
            <h3>Dr. Mike Johnson</h3>
            <p>Orthopedic Surgeon</p>
            </div>
        </Grid>
        <Grid className="doctor" item xs={6} sm={6} md={3} lg={3} data-aos="fade-up"data-aos-duration="950">
            <img src={doctor2} alt="Doctor 4" />
            <div className="info">
            <h3>Dr. Sarah Wilson</h3>
            <p>Dermatologist</p>
            </div>
        </Grid>
        </Grid>
        </div>


      <div className="layer">
        <div className="doctor-position">

        <div className="image-overlay" data-aos="fade-right" data-aos-duration="500">
      <img src={DrZee} alt="Doctor 3" width={500} />
      </div>
      <div className="info2" data-aos="fade-left" data-aos-duration="2000">
      <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut.
        </p>
      </div>
        
        </div>
        </div>

            <div className="doctors-layer">
                <div className="doctor-position">

            <div className="info2" data-aos="fade-right" data-aos-duration="2000"> 
            <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut.
                </p>
            </div>
            <div className="image-overlay" data-aos="fade-left" data-aos-duration="500">
            <img src={doctor1} alt="Doctor 3" width={500} />
            </div>
                </div>
                </div>
            <div className="layer">
                <div className="doctor-position">

                <div className="image-overlay" data-aos="fade-right" data-aos-duration="500">
                    <img src={DrBel} alt="Doctor 3" width={500} />
                </div>
            
            <div className="info2" data-aos="fade-left" data-aos-duration="2000">
            <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut.
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut.
                </p>
            </div>
                
                </div>
        </div>


      <div className="doctors-layer">
        <div className="doctor-position">

        
      
      <div className="info2" data-aos="fade-right" data-aos-duration="2000">
      <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut.
        </p>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, aut.
        </p>
      </div>
      <div className="image-overlay" data-aos="fade-left"  data-aos-duration="500">
      <img src={doctor2} alt="Doctor 3" width={500} />
      </div>

        </div>
        </div>
        </Stack>
<Footer />


</>
  );
};
