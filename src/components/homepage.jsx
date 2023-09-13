import React, { useState, useEffect } from "react";
import { NavbarMUI } from "./navbar";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import image1 from "../images/clinic6.jpg";
import image2 from "../images/One-Lux-Clinic2.jpg";
import image3 from "../images/One-Lux-Clinic3.jpg";
import "../App.css";
import { HomeContainer2 } from "./homepageContainer2";
import { HomeContainer3 } from "./HomepageContainer3";
import { HomeContainer4 } from "./homepageContainer4";
import { HomeContainer5 } from "./homepageContainer5";
import { Footer } from "./footer";
import "aos/dist/aos.css";
import Aos from "aos";
export const Homepage = () => {
  const [backgroundImageIndex, setBackgroundImageIndex] = useState(0);
  const backgroundImageUrls = [
    `url(${image1})`,
    `url(${image2})`,
    `url(${image3})`,
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the background image index
      setBackgroundImageIndex((prevIndex) =>
        prevIndex === backgroundImageUrls.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change the background image every 5 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, [backgroundImageUrls.length]);

  const backgroundImageStyle = {
    backgroundImage: backgroundImageUrls[backgroundImageIndex],
    transition: "opacity 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  };

  useEffect(()=>{
    Aos.init({duration:1000});
},[]);
  return (
<>

      <NavbarMUI />
      <div className="home-container1" style={backgroundImageStyle}>
        <Stack className="home-header" spacing={3}>
            <h1 data-aos="zoom-in">
              Best Dental Clinic in Cavite
            </h1>
            <div className="line" data-aos="zoom-in" data-aos-duration="1500">

            </div>
          <h2 data-aos="zoom-in" data-aos-duration="2000">
          Dedicated to Health, Driven by Passion. Ready for that smile upgrade?
            </h2>
              
            <div  data-aos="zoom-in" data-aos-duration="2000">
            <Link to="/ContactUs" className="home-link">
            <Typography
              variant="h3"
              textAlign={"center"} letterSpacing={2}>
                MAKE AN APPOINTMENT!
            </Typography>
            </Link>
            </div>
        </Stack>
      </div>

      <HomeContainer2 />
      <HomeContainer3/>
      <HomeContainer4/>
      <HomeContainer5/>
      <Footer />
      </>
   
  );
};
