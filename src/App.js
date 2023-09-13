
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import { Homepage } from './components/homepage';
import { NavbarMUI } from './components/navbar';
import { CdsAdvantage } from './components/cds-advantage';
import { OurDoctors } from './components/ourdoctors';
import { Services } from './components/services';
import { Gallery } from './components/gallery';
import { FAQs } from './components/faqs';
import { Branches } from './components/branches';
import { ContactUs } from './components/contactUs';

function App() {
  return (
<>
<BrowserRouter>
              <Routes>
              <Route path="/" element={<Homepage />}></Route>
              <Route path="/nav" element={<NavbarMUI />}></Route>
              <Route path="/cds-advantage" element={<CdsAdvantage />}></Route>
              <Route path="/Doctors" element={<OurDoctors />}></Route>
              <Route path="/Services" element={<Services />}></Route>
              <Route path="/Gallery" element={<Gallery />}></Route>
              <Route path="/FAQs" element={<FAQs />}></Route>
              <Route path="/Branches" element={<Branches />}></Route>
              <Route path="/ContactUs" element={<ContactUs />}></Route>
            
              </Routes>
              </BrowserRouter>
</>
  );
}

export default App;
