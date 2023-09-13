import React from "react";
import { NavbarMUI } from "./navbar";
import { Footer } from "./footer";
import "aos/dist/aos.css";
import { Stack } from "@mui/material";
import defaultIMG from "../images/before&after1.jpg"
export const Services = () => {


  return (
<>
<NavbarMUI />
<Stack className="services-container">
    <Stack className="doctors-heading">
            <h1 style={{ fontFamily: "   Abril Fatface,sans-serif", letterSpacing: "4px",  }}>Services</h1>
                <div className="line"></div>
    </Stack>
    <div className="services-summary">
        <Stack className="services-column">
            <Stack className="services-box">
                <h4 style={{ fontFamily: "   Abril Fatface,sans-serif", letterSpacing: "4px" , textAlign:"center"}}>COSMETIC DENTISTRY</h4>
                <p>Porcelain Veneers</p>
                <p>Fledspathic Veneers</p>
                <p>Teeth Whitening</p>
                <p>Take-Home Whitening</p>
                <p>Laser Gum Lift</p>
                <p>Laser Gum Depigmentation</p>
            </Stack>
            <Stack className="services-box">
                <h4 style={{ fontFamily: "   Abril Fatface,sans-serif", letterSpacing: "4px" , textAlign:"center"}}>PROSTHODONTICS</h4>
                <p>Dental Crowns</p>
                <p>Impant Crowns</p>
                <p>Dental Bridges</p>
                <p>Dentures</p>
                <p>Mouth Guard</p>
                <p>Night Guard</p>
            </Stack>
            <Stack className="services-box">
                <h4 style={{ fontFamily: "   Abril Fatface,sans-serif", letterSpacing: "4px" , textAlign:"center"}}>IMPLANTS</h4>
                <p>Dental Implants</p>
                <p>Pre-Implant Surgery</p>
            </Stack>
            <Stack className="services-box">
                <h4 style={{ fontFamily: "   Abril Fatface,sans-serif", letterSpacing: "4px" , textAlign:"center"}}>Surgery</h4>
                <p>Atraumatic Extraction</p>
                <p>Odontectomy (Implacted tooth removal)</p>

            </Stack>
        </Stack>
        <Stack className="services-column">
            <Stack className="services-box">
                <h4 style={{ fontFamily: "   Abril Fatface,sans-serif", letterSpacing: "4px" , textAlign:"center"}}>FRESH BREATH THERAPY</h4>
                <p>Periodontal Disease: Treatment & Maintentnace</p>
                <p>Bad Breath: Halimeter Diagnosis, Laser Treatment / Maintenance</p>
    
            </Stack>
            <Stack className="services-box">
                <h4 style={{ fontFamily: "   Abril Fatface,sans-serif", letterSpacing: "4px" , textAlign:"center"}}>TEMPOROMANDIBULAR DISEASE & OROFACIAL PAIN TMD/TMJ</h4>
            </Stack>
            <Stack className="services-box">
                <h4 style={{ fontFamily: "   Abril Fatface,sans-serif", letterSpacing: "4px" , textAlign:"center"}}>PERIODONTICS</h4>
                <p>Oral Prophylaxis</p>
                <p>(Deep) Scaling and Root Planing</p>
                <p>Pocket probing</p>
                <p>Pocket depth reduction</p>
                <p>Full mouth debridement</p>
                <p>laser inflammation reduction</p>
                <p>Laser Bacterial Reduction</p>
    
            </Stack>
            <Stack className="services-box">
                <h4 style={{ fontFamily: "   Abril Fatface,sans-serif", letterSpacing: "4px" , textAlign:"center"}}>RESTORATIVE</h4>
                <p>Dental Fillings</p>
                <p>Amalgam Removal</p>
                <p>Inlays / Onlays</p>
                <p>Plup Capping</p>
            </Stack>
        </Stack>
        <Stack className="services-column">
            <Stack className="services-box">
                <h4 style={{ fontFamily: "   Abril Fatface,sans-serif", letterSpacing: "4px" , textAlign:"center"}}>ENDODONTICS</h4>
                <p>Root Canal Treatment</p>
                <p>Apicoectomy</p>
            </Stack>
            <Stack className="services-box">
                <h4 style={{ fontFamily: "   Abril Fatface,sans-serif", letterSpacing: "4px", textAlign:"center" }}>ORTHODONTICS</h4>
                <p>Conventional Metal Braces</p>
                <p>Self Ligating Braces</p>
                <p>Ceramic Braces</p>
                <p>Clear Aligners</p>
            </Stack>
            <Stack className="services-box">
                <h4 style={{ fontFamily: "   Abril Fatface,sans-serif", letterSpacing: "4px" , textAlign:"center"}}>RADIOGRAPHS</h4>
                <p>Periapical Xray</p>
                <p>Panoramic Xray</p>
                <p>Cephalometric Xray</p>
                <p>TMJ Xray</p>
                <p>Antero-Posterior Xray</p>
                <p>CBCT (Cone Beam Computed Tomography)</p>

            </Stack>
        </Stack>
    </div>
    <Stack className="services-contents">
        <h1 style={{ fontFamily: "   Abril Fatface,sans-serif", letterSpacing: "4px" }}>COSMETIC DENTISTRY</h1>
        <p>Cosmetic dentistry is a method of professional oral care that focuses on improving the appearance of your mouth, teeth and smile. And although cosmetic dentistry procedures are usually elective, rather than essential, some cases of treatment also provide restorative benefits.</p>
        <p>The most common procedures used in cosmetic dentistry are fairly simple, whereas others are more complex and require specialized care.</p>
        <div className="services-subcontent">
            <Stack className="services-subcontent-text">
                <h3 >Porcelain / Feldspathic Veneers</h3>
                <p>Indirect restorations fabricated in the laboratory and cemented on top of your teeth.</p>

                <h3>Composite Veneers</h3>
                <p>Direct restorations that are bonded to your teeth through layering of composite material.</p>

                <h3>ZOOM! Teeth Whitening</h3>
                <p>Philips Zoom Whitening is a chairside, blue light-activated teeth whitening system that guarantees 5-9 shades lighter in just 1 hour.</p>

                <h3>Take Home Whitening</h3>
                <p>A convenient overnight kit that is worn daily. Optimum results appear within 2 weeks of continuous use.</p>

                <h3>Laser Gum Lift</h3>
                <p>A procedure composed of precise contouring of the gums to eliminate periodontal pockets and “gummy smiles.”</p>

                <h3>Laser Gum Depigmentation</h3>
                <p>A process of lightening the gums to remove dark, melanin-induced pigmentations.</p>
            </Stack>
            <Stack className="services-subcontent-img">
                <img src={defaultIMG} alt="default" width={400}/>
                </Stack>
        </div>
    </Stack>


    <Stack className="services-contents">
        <h1 style={{ fontFamily: "   Abril Fatface,sans-serif", letterSpacing: "4px" }}>PROSTHODONTICS</h1>
        <p>CSD offers the most advanced form of sequencing treatment, restorative treatment, and maintenance. CSD also performs an esthetically higher level of implantology and full mouth reconstruction.</p>
        <div className="services-subcontent">
            <Stack className="services-subcontent-text">
                <h3>Veneers</h3>
                <p>A layer of material placed over the front surface of a tooth to protect surface stains and damage, improve esthetics, and/or correct bite.</p>

                <h3>Dental Crowns</h3>
                <p>A layer of material placed over the entire surface of the tooth to restore lost function, protect remaining tooth structure, correct bite, and/or improve esthetics.</p>

                <h3>Implant Crowns</h3>
                <p>Prosthesis placed over an implant to replace a missing tooth.</p>

                <h3>Dental Bridges</h3>
                <p>A fixed restoration to replace one or more missing teeth by utilizing stable existing teeth as anchorage.</p>

                <h3>Dentures (Partial/complete)</h3>
                <p>A removable restoration placed on top of the gums to replace single or multiple missing teeth.</p>

                <h3>Mouth Guard</h3>
                <p>A personalized device worn over your teeth for protection, usually of thick material, often used for sports.</p>

                <h3>Night Guard</h3>
                <p>A personalized device worn over your teeth for protection from bruxism or night grinding.</p>
            </Stack>
            <Stack className="services-subcontent-img">
                
                </Stack>
        </div>
    </Stack>

    <Stack className="services-contents">
        <h1 style={{ fontFamily: "   Abril Fatface,sans-serif", letterSpacing: "4px" }}>DENTAL IMPLANT</h1>
        <p>Surgical placement of a fixture that simulates the tooth root, that upon healing, will be used as anchorage for replacement of the missing tooth.</p>
        
        <div className="services-subcontent">
            <Stack className="services-subcontent-text">
                <h3>Pre-Implant Surgery</h3>
                <p>Replacement of lost or insufficient bone structure to prepare the area to receive dental implants.</p>
            </Stack>
            <Stack className="services-subcontent-img">
                <img src={defaultIMG} alt="default" width={400}/>
                </Stack>
        </div>
    </Stack>



    <Stack className="services-contents">
        <h1 style={{ fontFamily: "   Abril Fatface,sans-serif", letterSpacing: "4px" }}>DENTAL IMPLANT</h1>
        <p>Surgical placement of a fixture that simulates the tooth root, that upon healing, will be used as anchorage for replacement of the missing tooth.</p>
        
        <div className="services-subcontent">
            <Stack className="services-subcontent-text">
                <h3>Pre-Implant Surgery</h3>
                <p>Replacement of lost or insufficient bone structure to prepare the area to receive dental implants.</p>
            </Stack>
            <Stack className="services-subcontent-img">
                <img src={defaultIMG} alt="default" width={400}/>
                </Stack>
        </div>
    </Stack>

    
</Stack>
<Footer />
</>
  );
};
