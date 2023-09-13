import React from "react";
import { NavbarMUI } from "./navbar";
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';
import {   } from "@mui/material";
import { Footer } from "./footer";
import { Stack ,Button, TextField, Grid} from "@mui/material";
export const ContactUs = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
      } = useForm();
    
      const onSubmit = (data) => {
        const templateParams = {
          name: data.name,
          email: data.email,
          contactNumber: data.contactNumber,
          message: data.message,
        };
    
        emailjs
          .send(
            'service_aj4htz5',
            'template_nui7h3n',
            templateParams,
            'TIL9e2Jjl-WtMmy4v'
          )
          .then(
            (response) => {
              console.log('Email sent successfully!', response.status, response.text);
              reset();
            },
            (error) => {
              console.error('Error sending email:', error);
            }
          );
      };
  return (
<>
<NavbarMUI />
<Stack className="cdsContainer">
        <div className="cds-layer">
        <Stack className="cdsHeading">
      <h1 style={{ fontFamily: "   Abril Fatface,sans-serif", letterSpacing: "4px" }}>Contact Us</h1>
        <div className="line"></div>
      </Stack>
      <div className="form-container">

      
      <form onSubmit={handleSubmit(onSubmit)} >
      <Stack direction={{ xs: 'column', md: 'row' }} spacing={2} justifyContent="center">
        <Grid item xs={12} sm={12} md={6}>
          <Stack spacing={2} >

            <TextField
              label="Name"
              type="text"
              
              {...register('name', { required: true })}
              error={!!errors.name}
              helperText={errors.name ? 'This field is required' : ''}
              sx={{
                width: '100%',
                '@media (min-width: 900px)': {
                  width: '400px',
                },
              }}
            />

            <TextField
              label="Contact Number"
              type="number"
              
              {...register('contactNumber', { required: true })}
              error={!!errors.contactNumber}
              helperText={errors.contactNumber ? 'This field is required' : ''}
              sx={{
                width: '100%',
                '@media (min-width: 900px)': {
                  width: '400px',
                },
              }}
            />

            <TextField
              label="Email"
              type="email"
              {...register('email', { required: true })}
              error={!!errors.email}
              helperText={errors.email ? 'This field is required' : ''}
              sx={{
                width: '100%',
                '@media (min-width: 900px)': {
                  width: '400px',
                },
              }}
            />
          </Stack>
        </Grid>
        <Grid item xs={12}  sm={12} md={6}>
          <Stack spacing={1} >
            <TextField
              label="Message"
              multiline
              rows={4}
              {...register('message', { required: true })}
              error={!!errors.message}
              helperText={errors.message ? 'This field is required' : ''}
              sx={{
                width: '100%',
                '@media (min-width: 900px)': {
                  width: '400px',
                },
              }}
            />
            <Button size="lg" variant="outlined" color="secondary" type="submit"              
                          sx={{
                            width: '100%',
                            '@media (min-width: 900px)': {
                              width: '400px',
                            },
                          }}>
              Send Message
            </Button>
          </Stack>
        </Grid>
      </Stack>
    </form>
    </div>
      </div>
      </Stack>
<Footer />
</>



  );
};