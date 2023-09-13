import React, { useEffect } from "react";
import { NavbarMUI } from "./navbar";
import '../App.css';
import number1 from "../images/number-1-filled-icon-12-512.png";
import number2 from "../images/number-2-filled-icon-512.png";
import number3 from "../images/number-3-filled-icon-12-512.png";
import number4 from "../images/number4.png";
import number5 from "../images/number-5-filled-icon-12-512.png";
import demoIMG from "../images/logo.jpg"
import "aos/dist/aos.css";
import Aos from "aos";
import { Footer } from "./footer";
import { Grid, Stack } from "@mui/material";

export const CdsAdvantage = () => {
  useEffect(()=>{
    Aos.init({duration:800});
},[]);

  return (
  <>

      <NavbarMUI />
      
      <Stack className="cdsContainer">
      <div className="cds-layer">
      <Stack className="cdsHeading">
      <h1 style={{ fontFamily: "   Abril Fatface,sans-serif", letterSpacing: "4px" }}>GDC Advantage</h1>
        <div className="line"></div>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis distinctio numquam quae deserunt nisi voluptate deleniti placeat est, rem dolores animi, nulla fuga voluptatum repellendus quas explicabo laborum. Rerum quos optio enim, libero numquam amet beatae explicabo non voluptates sit voluptatibus porro aspernatur illo. Eum aspernatur esse officia impedit. Dolorum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores alias quisquam quo repellendus rem optio ipsum. Iusto dolorum accusantium non?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore iure sed, vero veniam modi nemo!</p>
        <h3>INNOVATION</h3>
      </Stack>
       
        <Grid container className="innovation-container">
            <Grid item xs={12} sm={12} md={6} lg={6} className="innovation" data-aos="fade-up">
              <img src={number1}  alt="number1" width={90} height={90}/>
                <div className="number-container">
                  <h2>Consultation</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque asperiores maxime dolorum enim molestias eveniet ab veritatis est! Veniam, ipsum?</p>
                </div>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6} className="innovation" data-aos="fade-up">
            <img src={number2}  alt="number1" width={90} height={90}/>
            <div className="number-container">
              <h2>Consultation</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque asperiores maxime dolorum enim molestias eveniet ab veritatis est! Veniam, ipsum?</p>
            </div>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6} className="innovation" data-aos="fade-up">
            <img src={number3} alt="number1" width={90} height={90}/>
            <div className="number-container">
              <h2>Consultation</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque asperiores maxime dolorum enim molestias eveniet ab veritatis est! Veniam, ipsum?</p>
            </div>
                

            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6} className="innovation" data-aos="fade-up">
            <img src={number4} alt="number1" width={90} height={90}/>
            <div className="number-container">
              <h2>Consultation</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque asperiores maxime dolorum enim molestias eveniet ab veritatis est! Veniam, ipsum?</p>
            </div>
             </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6} className="innovation" data-aos="fade-up">
            <img src={number5} alt="number1" width={90} height={90}/>
            <div className="number-container">
              <h2>Consultation</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque asperiores maxime dolorum enim molestias eveniet ab veritatis est! Veniam, ipsum?</p>
            </div>
            </Grid>

        </Grid>


          <Stack className="affiliations-header">
          <h2 data-aos="fade-left" >OUR AFFILIATIONS</h2>
          </Stack>

      <Grid container>
        <Grid item xs={6} sm={6} md={4} lg={3} className="affiliations" data-aos="fade-up">
          <img src={demoIMG} alt="demo-img" width={200}/>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3} className="affiliations" data-aos="fade-up">
          <img src={demoIMG} alt="demo-img" width={200}/>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3} className="affiliations" data-aos="fade-up">
          <img src={demoIMG} alt="demo-img" width={200}/>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={3} className="affiliations" data-aos="fade-up">
          <img src={demoIMG} alt="demo-img" width={200}/>
        </Grid>

        <Grid item xs={6} sm={6} md={4} lg={4} className="affiliations" data-aos="fade-up">
          <img src={demoIMG} alt="demo-img" width={200}/>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4} className="affiliations" data-aos="fade-up">
          <img src={demoIMG} alt="demo-img" width={200}/>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} className="affiliations" data-aos="fade-up">
          <img src={demoIMG} alt="demo-img" width={200}/>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} className="affiliations" data-aos="flip-up">
          <img src={demoIMG} alt="demo-img" width={200}/>
        </Grid>
      </Grid>

      </div>
      </Stack>
      
      <Footer />
      </>
  );
};
