import React, { useState } from "react";
import { AppBar, Box, Container, IconButton, Drawer, List,ListItem, ListItemText, Toolbar,} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../images/GDC-hom2.jpg";
import { Link } from "react-router-dom";
import '../App.css';
import CloseIcon from "@mui/icons-material/Close";

export const NavbarMUI = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return (
    <>
    <AppBar position="fixed" style={{ background: "rgba(255, 192, 203, 0.7)",
    }}>
      <Container maxWidth="xl" width="100%">
        <Toolbar>
          <Box sx={{ display: "flex", alignItems: "center", width: "100%", justifyContent: "space-between",}}>
            <Link to="/">
              <img src={Logo} width="100" height="100" alt="post"
                style={{ display: { xs: "block", md: "none" }, marginLeft: "auto", marginRight: "auto",}}/>
            </Link>
            <IconButton size="large" color="inherit" onClick={toggleDrawer} sx={{ display: { xs: "block", md: "none" } }}>
              <MenuIcon />
            </IconButton>
            <Box sx={{ display: { xs: "none", md: "flex" }, justifyContent: "space-between",}}>

            <div class="dropdown">
            <Link to="/" className="nav-links"><button class="dropbtn">HOME</button></Link>
            </div>
            <div class="dropdown">
            <Link ><button class="dropbtn">ABOUT</button></Link>
              <div class="dropdown-content">
                <Link to="/cds-advantage">GDC ADVANTAGE</Link>
                <Link to="/doctors">OUR DOCTORS</Link>
              </div>
            </div>
            <div class="dropdown">
            <Link to="/Services" className="nav-links"><button class="dropbtn">SERVICES</button></Link>
            </div>
            <div class="dropdown">
            <Link to="/Branches"><button class="dropbtn">BRANCHES</button></Link>
              <div class="dropdown-content">
                <a href="/Branches#Panapaan-container">PANAPAAN</a>
                <a href="/Branches#Molino-container">MOLINO</a>
                <a href="/Branches#Carmona-container">CARMONA</a>
                <a href="/Branches#Dasmarinas-container">DASNARINAS</a>
                <a href="/Branches#Rosario-container">ROSARIO</a>
              </div>
            </div>
            <div class="dropdown">
            <Link to="/Gallery"><button class="dropbtn">GALLERY</button></Link>
              <div class="dropdown-content">
                <a href="/Gallery#target-beforeandafter">BEFORE & AFTER</a>
                <a href="/Gallery#office-target" >CLINIC TOUR</a>
              </div>
            </div>
            <div class="dropdown">
            <Link to="/FAQs" className="nav-links"><button class="dropbtn">FAQS</button></Link>
            </div>
            <div class="dropdown">
            <Link to="/ContactUs" className="nav-links"><button class="dropbtn">CONTACT</button></Link>
            </div>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>

      <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer} sx={{ display: { xs: "block", md: "none" }}}>
      <div className="drawer-header">
    <IconButton onClick={toggleDrawer}>
      <CloseIcon />
    </IconButton>
  </div>
        <List className="drawer-container">
          <ListItem onClick={toggleDrawer}>
            <ListItemText>
              <Link to="/" className="drawer-nav">HOME</Link>
            </ListItemText>
          </ListItem>
          <ListItem  onClick={toggleDrawer}>
            <ListItemText>
              <Link className="drawer-nav">ABOUT</Link>
              <Link to="/cds-advantage" className="drawer-nav-list">GDC ADVANTAGE</Link>
              <Link to="/doctors" className="drawer-nav-list">OUR DOCTORS</Link>
            </ListItemText>
          </ListItem>
          <ListItem  onClick={toggleDrawer}>
            <ListItemText>
              <Link to="/Services" className="drawer-nav">SERVICES</Link>
            </ListItemText>
          </ListItem>
          <ListItem  onClick={toggleDrawer}>
            <ListItemText>
              <Link to="/Branches" className="drawer-nav">BRANCHES</Link>
              <a href="/Branches#Panapaan-container" className="drawer-nav-list">PANAPAAN</a>
              <a href="/Branches#Molino-container" className="drawer-nav-list">MOLINO</a>
              <a href="/Branches#Carmona-container" className="drawer-nav-list">CARMONA</a>
              <a href="/Branches#Dasmarinas-container" className="drawer-nav-list">DASNARINAS</a>
              <a href="/Branches#Rosario-container" className="drawer-nav-list">ROSARIO</a>
            </ListItemText>
          </ListItem>
          <ListItem  onClick={toggleDrawer}>
            <ListItemText>
              <Link to="/Gallery" className="drawer-nav">GALLERY</Link>
              <a href="/Gallery#target-beforeandafter" className="drawer-nav-list">BEFORE & AFTER</a>
              <a href="/Gallery#office-target" className="drawer-nav-list">CLINIC TOUR</a>
            </ListItemText>
          </ListItem>
          <ListItem  onClick={toggleDrawer}>
            <ListItemText>
              <Link to="/FAQs"className="drawer-nav" >FAQs</Link>
            </ListItemText>
          </ListItem>
          <ListItem  onClick={toggleDrawer}>
            <ListItemText>
              <Link to="/ContactUs" className="drawer-nav">CONTACT</Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};
