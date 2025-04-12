
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from './Home';
import About from './Pages/About';
import NavbarSection from './Components/Navbar';
import Features from './Pages/Features';
import OurTeam from './Pages/OurTeam';
import ContactUs from './Pages/ContactUs';
import FAQ from './Pages/FAQ';
import ScrollToTop from './ScrollToTop';


const App = () => {
  return (
    <Router>
      <NavbarSection />
      <ScrollToTop/>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/our-team" element={<OurTeam />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faq" element={<FAQ />} />

      </Routes>
    </Router>


  );
};

export default App;
