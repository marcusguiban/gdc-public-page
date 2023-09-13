import React, { useEffect } from "react";
import { Stack, Typography, Grid } from "@mui/material";
import defpic from "../images/GDC-hom2.jpg"
import { Link } from "react-router-dom";
import "../App.css";
import "aos/dist/aos.css";
import Aos from "aos";
export const HomeContainer2 = () => {
    useEffect(()=>{
        Aos.init({duration:1000});

    },[]);
  return (
    
            <div className="home-container2">
        <Grid container spacing={2} sx={{py:5,}}>         
            <Grid item xs={12} sm={12} md={4} lg={4} className="grid-item">
            <Stack data-aos="fade-up" className="home-content2">
                <img src={defpic} width="100" height="100" alt="post" />
                <Typography variant="h5" gutterBottom letterSpacing={2} fontSize={18} textAlign={"center"}>
                COSMETIC DENTISTRY
                </Typography>
                <Typography
                variant="p"
                gutterBottom
                textAlign={"center"}
                fontSize={18}
                sx={{ display: { xs: "none", md: "none", lg: "flex" }, px:"80px" , color:"grey"}}>
               Cosmetic dentistry is a method of professional oral care that focuses on improving the appearance of...
                </Typography>
            </Stack>
            </Grid>

        <Grid item xs={6} sm={6} md={4} lg={4} className="grid-item">
          <Stack data-aos="fade-up"className="home-content2">
            <img src={defpic} width="100" height="100" alt="post" />
            <Typography variant="h5" gutterBottom letterSpacing={2} fontSize={18} textAlign={"center"}>
              PROSTHODONTICS
            </Typography>
            <Typography
              variant="p"
              gutterBottom
              textAlign={"center"}
              fontSize={18}
              sx={{ display: { xs: "none", md: "none", lg: "flex" } , px:"80px", color:"grey"}}>
              GDC offers the most advanced form of sequencing treatment, restorative treatment, and...
            </Typography>
          </Stack>
        </Grid>

            <Grid item xs={6} sm={6} md={4} lg={4} className="grid-item">
            <Stack data-aos="fade-up" className="home-content2">
                <img src={defpic} width="100" height="100" alt="post" />
                <Typography variant="h5" gutterBottom letterSpacing={2} fontSize={18} textAlign={"center"}>
                DENTAL IMPLANT
                </Typography>
                <Typography
                variant="p"
                gutterBottom
                textAlign={"center"}
                fontSize={18}
                sx={{ display: { xs: "none", md: "none", lg: "flex" }, px:"80px" , color:"grey"}}>
Surgical placement of a fixture that simulates the tooth root, that upon healing, will be used as anchorage...
                </Typography>
            </Stack>
            </Grid>


                        <Grid item xs={6} sm={6} md={4} lg={4} className="grid-item2">
                    <Stack data-aos="fade-up" className="home-content2">
                        <img src={defpic} width="100" height="100" alt="post" />
                        <Typography variant="h5" gutterBottom letterSpacing={2} fontSize={18} textAlign={"center"}>
                        BREATH THERAPY
                        </Typography>
                        <Typography
                        variant="p"
                        gutterBottom
                        textAlign={"center"}
                        fontSize={18}
                        sx={{ display: { xs: "none", md: "none", lg: "flex" }, px:"80px" , color:"grey"}}>
Treatment and prevention of Acute and Chronic Halitosis using Advanced Laser technology and Halimeter machine.
                        </Typography>
                    </Stack>
                    </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} order={{ xs: 6, sm: 6, md:5, lg: 5 }} className="grid-item2">
          <Stack data-aos="zoom-in" className="home-content2" sx={{pt:10}}>
            <Typography variant="h3" gutterBottom fontSize={30} textAlign={"center"} style={{ fontFamily: "   Abril Fatface,sans-serif" }}>
              Know More About Our Services
            </Typography>
            <Link to="/Services" className="home-link">
            <Typography
              variant="p"
              gutterBottom
              textAlign={"center"} letterSpacing={2}>
                SERVICES
            </Typography>
            </Link>
          </Stack>
        </Grid>

        <Grid item xs={6} sm={6}  md={4} lg={4} order={{ xs: 5, sm: 5, md:6, lg: 6 }} className="grid-item2">
          <Stack data-aos="fade-up" className="home-content2" >
            <img src={defpic} width="100" height="100" alt="post" />
            <Typography variant="h5" gutterBottom letterSpacing={2} fontSize={18} textAlign={"center"}>
              ORAL SURGERY
            </Typography>
            <Typography
              variant="p"
              gutterBottom
              textAlign={"center"}
              fontSize={18}
              sx={{ display: { xs: "none", md: "none", lg: "flex" } , px:"80px" , color:"grey"}}>
              The extraction of an embedded tooth which consists removal of the bone surrounding the tooth before...
            </Typography>
          </Stack>
        </Grid>

        </Grid>
        </div>
  );
};