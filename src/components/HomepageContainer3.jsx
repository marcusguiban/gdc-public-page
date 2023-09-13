import React, { useEffect } from "react";
import { Stack, Typography, Grid } from "@mui/material";
import Doctorsgroup from "../images/doctors-group.jpg"
import "../App.css";
import "aos/dist/aos.css";
import Aos from "aos";
import { Link } from "react-router-dom";

export const HomeContainer3 = () => {
    useEffect(()=>{
        Aos.init({duration:800});
    },[]);
  return (
    
    <div className="content-container-3">
        <Grid container >         
            <Grid item xs={12} sm={12} md={6} lg={6} >
                <Stack spacing={2} className="content3">
                    <Typography variant="h5" gutterBottom data-aos="fade-left" color="brown" fontWeight={300} fontSize={22}>
                    ABOUT
                    </Typography>
                    <Typography variant="h5" sx={{ fontStyle: 'italic', fontSize:16 }} gutterBottom data-aos="fade-left" >
                    DENTAL CLINIC IN CAVITE
                    </Typography>
                    <Typography variant="h4" gutterBottom data-aos="fade-left" data-aos-delay="200" textAlign={"left"} sx={{pb: 5}} style={{ fontFamily: "   Abril Fatface,sans-serif" }}>
                    GUIBAN SMILE DESIGN
                    </Typography>
                    <Typography variant="p" gutterBottom>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus culpa recusandae laboriosam unde delectus doloribus expedita ut maxime. Esse perferendis sapiente quod nisi, natus rerum voluptates accusamus reiciendis, commodi id quos dicta asperiores quasi amet suscipit, beatae temporibus et dignissimos!
                    </Typography>
                    <Typography variant="p" gutterBottom>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus culpa recusandae laboriosam unde delectus doloribus expedita ut maxime. Esse perferendis sapiente quod nisi, natus rerum voluptates accusamus reiciendis, commodi id quos dicta asperiores quasi amet suscipit, beatae temporibus et dignissimos!
                    </Typography>
                    <Typography variant="p" gutterBottom>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus culpa recusandae laboriosam unde delectus doloribus expedita ut maxime. Esse perferendis sapiente quod nisi, natus rerum voluptates accusamus reiciendis, commodi id quos dicta asperiores quasi amet suscipit, beatae temporibus et dignissimos!
                    </Typography>
                    <Typography variant="p" gutterBottom>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus culpa recusandae laboriosam unde delectus doloribus expedita ut maxime. Esse perferendis sapiente quod nisi, natus rerum voluptates accusamus reiciendis, commodi id quos dicta asperiores quasi amet suscipit, beatae temporibus et dignissimos!
                    </Typography>

                </Stack>

                <div data-aos="fade-left" className="service-link-container">
                <Link to="/cds-advantage"  className="services-link">
                        <Typography variant="p" gutterBottom  textAlign={"center"}> READ MORE</Typography>
                    </Link>
                </div>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6} >
                <Stack data-aos="fade-in">
                    <img src={Doctorsgroup} width="100%" height="100%" alt="post"/>
                </Stack>
            </Grid>
        </Grid>
    </div>


  );
};