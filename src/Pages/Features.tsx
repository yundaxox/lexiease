
import NavbarSection from "../Components/Navbar";
import FooterSection from "../Components/FooterSection";
import FeatureIllustration from "../assets/Freature Ilustration.svg";
import Ai from "../assets/Artificial Intelligence.svg";
import FeaturesSection from "../Components/FeaturesSection";
import Document from "../assets/Document.svg";

const About = () => {
  
  return (
    <div className="w-full font-[Inter] bg-white text-gray-900 ">
      <NavbarSection />
      
      
      <h1 className="text-3xl font-extrabold text-center mb-5 mt-25 tracking-tight">Features</h1>
    
    
      <section className="bg-[#2d3142] text-white py-5 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
      
        <img 
          src={FeatureIllustration} 
          alt="Platform Illustration" 
          className="mb-10 w-full max-w-3xl" 
        />

        {/* Text */}
        <p className="text-sm md:text-base leading-relaxed max-w-4xl text-gray-200">
          Our advanced tool is designed to revolutionize the way you process information.
          Harnessing state-of-the-art AI technology, it effortlessly transforms lengthy,
          complex texts into concise, accessible summaries. With a focus on dyslexia-friendly
          design, extensive customization options, multi-format support, and integrated 
          text-to-speech functionality, our platform empowers you to read, learn, and share 
          knowledge with ease—all while keeping your data secure.
        </p>
      </div>

    </section>

    <FeaturesSection/>

    <section className="bg-white py-12 px-6 m-40 mt-1 mb-2">
    <h2 className="text-3xl font-extrabold text-center mb-12">Features</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-4 text-center">
      
    
      <div className="flex flex-col items-center px-4">
      
        <div className="w-35 h-35 mb-4">
          <img src={Document} alt="AI Icon" className="w-full h-full object-contain" />
        </div>
        <h3 className="font-bold text-[20px] mb-2">Multi-Format Support</h3>
        <p className="text-black">
        Upload and summarize text from PDFs, DOCX, TXT, and more for seamless integration into your workflow.
        </p>
      </div>

      
      <div className="flex flex-col items-center px-4 border-l border-black-300">
        <div className="w-35 h-35 mb-4 ">
          <img src={Ai} alt="Dyslexia Icon" className="w-full h-full object-contain" />
        </div>
        <h3 className="font-bold text-[20px] mb-2 "> Smart Sentence Structuring </h3>
        <p className="text-black">
        Ensures simplified, easy-to-understand summaries by restructuring complex sentences for better comprehension.
        </p>
      </div>

     
      <div className="flex flex-col items-center px-4 border-l border-black-300">
        <div className="w-35 h-35  mb-4">
          <img src={Ai} alt="TTS Icon" className="w-full h-full object-contain" />
        </div>
        <h3 className="font-bold text-[20px] mb-2">Customizable User Experience</h3>
        <p className="text-black">
        Modify text size, background colors, and display settings to create a reading experience that suits your personal needs.
        </p>
      </div>

      
      <div className="flex flex-col items-center px-4 border-l border-black-300">
        <div className="w-35 h-35 mb-4">
          <img src={Ai}alt="Privacy Icon" className="w-full h-full object-contain" />
        </div>
        <h3 className="font-bold text-[20px] mb-2">Privacy & Security</h3>
        <p className="text-black">
          Your data is never stored or shared, ensuring full privacy protection.
        </p>
      </div>

    </div>
  </section>

  <div className="flex flex-col items-center justify-center  bg-white mt-10 p-6">
      <h1 className="text-3xl font-extrabold text-center mb-4">
        Ready to simplify your text?
      </h1>
      
        <div className="flex justify-center">
        <button className="bg-[#ef8354] contecnt-center text-white font-bold px-8 py-2 rounded-md cursor-pointer shadow-md hover:bg-orange-600 transition">Summarize</button>
        </div>
</div>
    
      <FooterSection/>
    </div>
  );
};

export default About;
