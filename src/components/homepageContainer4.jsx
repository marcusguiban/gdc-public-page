import React, { useState, useEffect } from "react";
import "../App.css";
import "aos/dist/aos.css";
import Aos from "aos";
import { Stack, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import GDC from "../images/Homepage.png"
import { Link } from "react-router-dom";
export const HomeContainer4 = () => {
  const testimonials = [
    {
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, non earum accusantium cumque perspiciatis animi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, non earum accusantium cumque perspiciatis animi.",
      name: "Name 1",
    },
    {
      text:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae aliquam esse porro maxime facilis sunt sed rem voluptas temporibus libero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, non earum accusantium cumque perspiciatis animi.",
      name: "Name 2",
    },
    {
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, ex totam. Deserunt ducimus veniam corporis, quisquam quidem autem accusantium laudantium quia similique laborum sapiente nulla, neque modi blanditiis est ullam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, non earum accusantium cumque perspiciatis animi.",
      name: "Name 3",
    },
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    Aos.init({duration:800});
    const intervalId = setInterval(() => {
      // Show the next testimonial
      setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change the testimonial every 5 seconds

    return () => {
      clearInterval(intervalId);
    };
  }, [testimonials.length]);

  return (
    <div className="home-container4">
      <div className="layer">
      <Stack className="home4-content1">
        <Typography variant="h5" sx={{color: "gold", pb:10}} data-aos="fade-left">TESTIMONIALS</Typography>
        <Typography variant="h4" textAlign={"left"}data-aos="fade-left" data-aos-delay="200" style={{ fontFamily: "   Abril Fatface,sans-serif" }}>Our Patient's Feedback</Typography>
      </Stack>
      <Stack>
        <Typography variant="p" className="testimonial-text">
          {testimonials[currentTestimonialIndex].text}
        </Typography>
        <Stack direction={"row"} className="star-and-name">
          <StarIcon sx={{color: "yellow"}}/>
          <StarIcon sx={{color: "yellow"}}/>
          <StarIcon sx={{color: "yellow"}}/>
          <StarIcon sx={{color: "yellow"}}/>
          <StarIcon sx={{color: "yellow"}}/>
          <Typography variant="p" >{testimonials[currentTestimonialIndex].name}</Typography>
        </Stack>
      </Stack>
      <Stack className="link-container" data-aos="fade-up">
          <Link to="/ContactUs">
            <img src={GDC} alt="gdc" className="link-image" />
          </Link>
        </Stack>

      </div>
    </div>
  );
};
