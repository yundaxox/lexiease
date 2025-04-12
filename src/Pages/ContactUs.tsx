 
import NavbarSection from "../Components/Navbar";
import FooterSection from "../Components/FooterSection";
import FaqSection from "../Components/FaqSection";
import ContactUsIllustration from "../assets/Contact Us.svg";
import { FaEnvelope, FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { FaMessage } from "react-icons/fa6";

const ContactUs = () => {
 

    return (
        <div className="w-full font-[Inter] bg-white text-black">
          <NavbarSection />
          <h1 className="text-3xl font-extrabold text-center mb-5 mt-25 tracking-tight">
            Contact Us
          </h1>
          
          <section className="bg-[#2d3142] text-white">
            <div className="max-w-2xl mx-auto  pt-1 pb-1 flex flex-col items-center">
              <img 
                src={ContactUsIllustration} 
                alt="Contact illustration"
                className="w-full max-w-1xl " 
              />
            </div>
          
        
   

  </section>


  <section className="px-6 py-16 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
        Get in Touch With Us
      </h2>
      <p className="text-gray-700 mb-12">
        We're here to help make reading easier for everyone. Choose your
        preferred way to reach out to us.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Email Card */}
        <div className="bg-[#2d3142] text-white p-6 rounded-3xl shadow-md">
          <div className="flex flex-col items-center">
            <div className="bg-white text-[#ef8354] rounded-full p-3 mb-4">
              <FaEnvelope size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Email Us</h3>
            <p className="text-sm text-center mb-2">
              Send us an email anytime. We typically respond within 24 hours.
            </p>
            <a
              href="mailto:support@textease.com"
              className="text-[#ef8354] font-bold text-sm"
            >
              support@textease.com
            </a>
          </div>
        </div>

        {/* Social Media Card */}
        <div className="bg-[#2d3142] text-white p-6 rounded-3xl shadow-md">
          <div className="flex flex-col items-center">
            <div className="bg-white text-[#ef8354] rounded-full p-3 mb-4">
              <FaMessage size={24} />
            </div>
            <h3 className="text-lg font-semibold mb-2">Social Media</h3>
            <p className="text-sm text-center mb-4">
              Connect with us on social media for quick responses.
            </p>
            <div className="flex gap-4 text-white text-lg">
              <a href="#" className="hover:text-blue-400">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-blue-500">
                <FaLinkedin />
              </a>
              <a href="#" className="hover:text-blue-600">
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  
      <FaqSection/>
      <FooterSection/>
    </div>
  );
};

export default ContactUs;
