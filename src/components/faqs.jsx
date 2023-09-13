import React, { useEffect } from "react";
import { NavbarMUI } from "./navbar";
import { Stack, Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Footer } from "./footer";
import "aos/dist/aos.css";
import Aos from "aos";

export const FAQs = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  // Define your FAQ data as an array of objects with questions and answers
  const faqData = [
    {
      question: "What are your clinic hours?",
      answer: "On weekdays we are open from 9am – 5pm, and on Saturdays from 9am – 3pm. We are closed on Sundays.",
    },
    {
      question: "Do you accept walk-ins?",
      answer: "We are by appointment only.",
    },
    {
        question: "Is there parking?",
        answer: "There is an available pay parking behind Philamlife Tower, Valero St.",
      },
      {
        question: "What are your modes of payment?",
        answer: "Payment methods are cash, check, and credit / debit card. For multiple-appointment procedures, a 50% down payment is required once procedure commences. The remaining 50% is payable throughout the remaining appointments.",
      },
      {
        question: "What is the second question?",
        answer: "This is the answer to the second question.",
      },
      {
        question: "What is the second question?",
        answer: "This is the answer to the second question.",
      },
    // Add more questions and answers as needed
  ];

  return (
    <>
      <NavbarMUI />
      <Stack className="cdsContainer">
        <div className="cds-layer">
          <Stack className="cdsHeading">
            <h1 style={{ fontFamily: "   Abril Fatface,sans-serif", letterSpacing: "4px" }}>FAQs</h1>
            <div className="line"></div>
          </Stack>
          {/* Render the FAQs using Accordion */}
          {faqData.map((faq, index) => (
            <Accordion key={index} sx={{backgroundColor: "transparent"}}>
                <div className="question-container">

                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`faq-panel-${index}-content`}
                            id={`faq-panel-${index}-header`}
                        >
                            <Typography variant="h5" fontSize={20} letterSpacing={2} >{faq.question}</Typography>
                        </AccordionSummary>
              
              </div>
              <div className="answer-container">

              <AccordionDetails>
                <Typography className="faq-answer" >{faq.answer}</Typography>
              </AccordionDetails>
                              
              </div>
            </Accordion>
          ))}
        </div>
      </Stack>
      <Footer />
    </>
  );
};

