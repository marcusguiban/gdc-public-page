import React from "react";
import "../App.css";
import {Stack, Typography} from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import Logo from "../images/logo.jpg"
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from "react-router-dom";
export const Footer = () => {



  return (
    <>

    <div className="footer">
        <Stack>
            <img src={Logo} alt="logo" className="logo-footer"/>
            <Stack flexDirection="row">
                <Link to="#" className="footer-icon"><FacebookIcon fontSize="large"/></Link>
                <Link to="#" className="footer-icon"><InstagramIcon fontSize="large"/></Link>
            </Stack>
        </Stack>
        <Stack maxWidth={300}>
            <Typography variant="p" gutterBottom> Clinic: Address: Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis explicabo, quaerat provident amet optio dolorem!</Typography>
            <Typography variant="p" gutterBottom >Tell: +63 999 999 9999 |+63 999 999 9999 |+63 999 999 9999 </Typography>
            <Typography variant="p" gutterBottom>Viber & Whatsapp: +63 999 999 9999</Typography>
            <Typography variant="p" gutterBottom>Email: example@mail.com</Typography>
        </Stack>
        <Stack>
        <Typography variant="h6" gutterBottom> OPENING HOURS</Typography> 
        <Typography variant="p" gutterBottom>(By appointment)</Typography>
        <Typography variant="p"gutterBottom>Mon - Fri: 9:00pm - 5:00pm</Typography>
        <Typography variant="p"gutterBottom>Sat: 9:00-3:00</Typography>
        <Typography variant="p"gutterBottom>Sun: By appointment</Typography>
        </Stack>
    </div>
        <Stack className="credits">
            <Typography variant="p">Maintained and Developed by Marcus Gabrielle G. Guiban </Typography>
        </Stack>
    </>
  );
};