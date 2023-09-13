import React, {  useEffect } from "react";
import { NavbarMUI } from "./navbar";
import { Grid, Stack, Typography } from "@mui/material";
import Panapaan from "../images/panapaanMap.jpg"
import Molino from "../images/molinoMap.jpg"
import Carmona from "../images/carmonaMap.jpg"
import Dasmarinas from "../images/dasmaMap.jpg"
import Rosario from "../images/rosarioMap.jpg"



import { Footer } from "./footer";
import "aos/dist/aos.css";
import Aos from "aos";
import { Link } from "react-router-dom";
export const Branches = () => {

  useEffect(()=>{
    Aos.init({duration:1000});
},[]);
  return (
<>
<NavbarMUI />
    <Stack className="cdsContainer">
        <div className="cds-layer">
        <Stack className="cdsHeading">
      <h1 style={{ fontFamily: "   Abril Fatface,sans-serif", letterSpacing: "4px" }}>Branches in Cavite</h1>
        <div className="line"></div>
      </Stack>



    <div id="Panapaan-container" className="branch-container">
        <Stack className="cdsHeading" data-aos="fade-up">
            <h2 style={{ fontFamily: "   Abril Fatface,sans-serif", letterSpacing: "4px" }}>PANAPAAN BRANCH</h2>
        </Stack>
            <Grid container>
                <Grid item md={6} sm={12} align="center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.6522993226517!2d120.95069767581133!3d14.447190680812762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cda0e3f8d9a1%3A0x337ae87aa24709!2sGuiban%20Dental%20Clinic%20Panapaan%20Branch!5e0!3m2!1sen!2sph!4v1682406881331!5m2!1sen!2sph" 
                    width="100%" 
                    height={400} 
                    style={{ border: "0" }}
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Rosario googlemaps" data-aos="fade-right">
                        
                    </iframe>
                    <Typography variant="h5" align="center" color={"palevioletred"} sx={{py:5}} 
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    > We are located at #249 V. Aguistin Bldg., Panapaan 1, Bacoor City, Cavite </Typography>
                </Grid>
                <Grid item md={6} sm={12} align="center">
                    <img src={Panapaan} className="map" alt="Panapaan map" data-aos="fade-left" data-aos-duration="2000"></img>
                </Grid>
            </Grid>
    </div>

    <div id="Molino-container" className="branch-container">
        <Stack className="cdsHeading" data-aos="fade-up">
            <h2 style={{ fontFamily: "   Abril Fatface,sans-serif", letterSpacing: "4px" }}>MOLINO BRANCH</h2>
        </Stack>
            <Grid container>
                <Grid item md={6} sm={12} align="center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.633088503726!2d120.97752699999997!3d14.390628099999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d3db6aafa1e7%3A0xb8ff8bfaec05bf99!2sguiban%20dental%20clinic!5e0!3m2!1sen!2sph!4v1682413886498!5m2!1sen!2sph" 
                    width="100%" 
                    height={400} 
                    style={{ border: "0" }}
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Rosario googlemaps" data-aos="fade-right">
                        
                    </iframe>
                    <Typography variant="h5" align="center" color={"palevioletred"} sx={{py:5}} 
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    > We are located at 3rd Floor, Avon Bldg., L. 2 Blk. 3, Molino Road, Molino 3, Molino, Bacoor City, Cavite </Typography>
                </Grid>
                <Grid item md={6} sm={12} align="center">
                    <img src={Molino} className="map" alt="Panapaan map" width={400} data-aos="fade-left" data-aos-duration="2000"></img>
                </Grid>
            </Grid>
    </div>

    <div id="Carmona-container" className="branch-container">
        <Stack className="cdsHeading" data-aos="fade-up">
            <h2 style={{ fontFamily: "   Abril Fatface,sans-serif", letterSpacing: "4px" }}>CARMONA BRANCH</h2>
        </Stack>
            <Grid container>
                <Grid item md={6} sm={12} align="center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3865.9616043808282!2d121.05026577577014!3d14.31366308403599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d7bd37b44daf%3A0x7462f088ed68106c!2sGuiban%20Dental%20Clinic%20Carmona%20Branch!5e0!3m2!1sen!2sph!4v1687008093458!5m2!1sen!2sph" 
                    width="100%" 
                    height={400} 
                    style={{ border: "0" }}
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Rosario googlemaps" data-aos="fade-right">
                        
                    </iframe>
                    <Typography variant="h5" align="center" color={"palevioletred"} sx={{py:5}} 
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    > We are located at Lot 3 Blk 5 GF JabezTech Bldg. Macaria Business Center Carmona, Cavite  </Typography>
                </Grid>
                <Grid item md={6} sm={12} align="center">
                    <img src={Carmona} className="map" alt="Panapaan map" width={400} data-aos="fade-left" data-aos-duration="2000"></img>
                </Grid>
            </Grid>
    </div>
    <div id="Dasmarinas-container" className="branch-container">
        <Stack className="cdsHeading" data-aos="fade-up">
            <h2 style={{ fontFamily: "   Abril Fatface,sans-serif", letterSpacing: "4px", textAlign:"center" }}>DASNARINAS BRANCH</h2>
        </Stack>
            <Grid container>
                <Grid item md={6} sm={12} align="center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3865.9616043808282!2d121.05026577577014!3d14.31366308403599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d7bd37b44daf%3A0x7462f088ed68106c!2sGuiban%20Dental%20Clinic%20Carmona%20Branch!5e0!3m2!1sen!2sph!4v1687008093458!5m2!1sen!2sph" 
                    width="100%" 
                    height={400} 
                    style={{ border: "0" }}
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Rosario googlemaps" data-aos="fade-right">
                        
                    </iframe>
                    <Typography variant="h5" align="center" color={"palevioletred"} sx={{py:5}} 
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    > We are located at L.E.A Building 084, Palapala, Sampaloc 1, Dasmarinas, Cavite</Typography>
                </Grid>
                <Grid item md={6} sm={12} align="center">
                    <img src={Dasmarinas} className="map" alt="Panapaan map" width={400} data-aos="fade-left" data-aos-duration="2000"></img>
                </Grid>
            </Grid>
    </div>
    <div id="Rosario-container" className="branch-container">
        <Stack className="cdsHeading" data-aos="fade-up">
            <h2 style={{ fontFamily: "   Abril Fatface,sans-serif", letterSpacing: "4px" }}>ROSARIO BRANCH</h2>
        </Stack>
            <Grid container>
                <Grid item md={6} sm={12} align="center">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.3214035110514!2d120.85621096193789!3d14.408626681578346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33962dd3cd63022f%3A0xb8f7418a668660e5!2sGuiban%20Dental%20Clinic%20Rosario%20Branch!5e0!3m2!1sen!2sph!4v1682414377794!5m2!1sen!2sph" 
                    width="100%" 
                    height={400} 
                    style={{ border: "0" }}
                    allowfullscreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"
                    title="Rosario googlemaps" data-aos="fade-right">
                        
                    </iframe>
                    <Typography variant="h5" align="center" color={"palevioletred"} sx={{py:5}} 
                    data-aos="fade-right"
                    data-aos-duration="1500"
                    > We are located at RRE Bld, Blk4 Lot 14 Costaverde Subd. Tejeros Convention Rosario, Cavite</Typography>
                </Grid>
                <Grid item md={6} sm={12} align="center">
                    <img src={Rosario} className="map" alt="Panapaan map" width={400} data-aos="fade-left" data-aos-duration="2000"></img>
                </Grid>
            </Grid>
    </div>
    <div className="branches-link-container">
    <Link to="/ContactUs" className="home-link">
            <Typography
              variant="p"
              gutterBottom
              textAlign={"center"} letterSpacing={2}>
                MAKE AN APPOINTMENT!
            </Typography>
            </Link>
    </div>

    <iframe
          src="https://www.youtube.com/embed/kVWfeBSM0fQ"
          title="YouTube video player"
          width="100%"
          height="415"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen></iframe>
        </div>
    </Stack>
<Footer />
</>
  );
};
