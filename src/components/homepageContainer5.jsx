import React, { useEffect } from "react";
import "../App.css";
import "aos/dist/aos.css";
import Aos from "aos";
import {Grid, Typography } from "@mui/material";

import beforeAndAfter1 from "../images/before&after1.jpg"
import beforeAndAfter2 from "../images/before&after2.jpg"
import beforeAndAfter3 from "../images/before&after3.jpg"
import { Link } from "react-router-dom";


export const HomeContainer5 = () => {
  useEffect(()=>{
    Aos.init({duration:800});
},[]);

  return (
    <div className="home-container5">
        <div className="heading-container5">
        <Typography variant="h5" data-aos="fade-left" fontSize={25} color={"pink"}>Results</Typography>
        <div className="home-content5" >
        <Typography variant="h4" data-aos="fade-left" style={{ fontFamily: "   Abril Fatface,sans-serif" }}>Guiban Dental Clinic Excellent Results</Typography>
        <Link to="/Gallery" className="gallery-link">
            <Typography variant="p"  textAlign={"center"}>VIEW MORE</Typography>
        </Link>
        </div>

        </div>

        <Grid container>
            <Grid item xs={12} sm={12} md={6}lg={4}sx={{display: "flex", alignItems:"center", justifyContent:"center"}}>
                <img src={beforeAndAfter1} alt="before and after pic" data-aos="fade-up" className="before-and-after-img"/>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4}sx={{display: "flex", alignItems:"center", justifyContent:"center"}}>
                <img src={beforeAndAfter2} alt="before and after pic" data-aos="fade-up" className="before-and-after-img"/>
            </Grid>
            <Grid item xs={12}sm={12} md={6} lg={4} sx={{display: "flex", alignItems:"center", justifyContent:"center"}}>
                <img src={beforeAndAfter3} alt="before and after pic" data-aos="fade-up" className="before-and-after-img"/>
            </Grid>
            <Grid item  className="gallery-link-container"xs={12} sm={12} md={6} lg="none" sx={{display: "flex", alignItems:"center", justifyContent:"center", py:5}}>
            <Link to="/Gallery" className="gallery-link2">
            <Typography variant="p"  textAlign={"center"}>VIEW MORE</Typography>
        </Link>
            </Grid>
        </Grid>
        <iframe
          src="https://www.youtube.com/embed/kVWfeBSM0fQ"
          title="YouTube video player"
          width="100%"
          height="415"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen></iframe>

    </div>
  );
};