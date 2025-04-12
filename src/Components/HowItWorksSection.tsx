
import Slider from '../assets/Slider.svg';
import Learning from '../assets/Learning.svg';
import Document from '../assets/Document.svg';
import Speech from '../assets/Speech.svg'

export default function HowItWorksSection() {
  return (
    <section className="bg-white py-12 px-6 m-40 mt-1 mb-2">
    <h2 className="text-3xl font-extrabold text-center mb-12">How it works?</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-4 text-center">
      
      {/* 1*/}
      <div className="flex flex-col items-center px-4">
      
        <div className="w-35 h-35 mb-4">
          <img src={Document} alt="AI Icon" className="w-full h-full object-contain" />
        </div>
   
        <p className="text-black">
        Easily upload a document (PDF, DOCX) or paste text into the input box.
        </p>
      </div>

      {/* 2 */}
      <div className="flex flex-col items-center px-4 border-l border-black-300">
        <div className="w-35 h-35 mb-4 ">
          <img src={Learning} alt="Dyslexia Icon" className="w-full h-full object-contain" />
        </div>
        
        <p className="text-black">
        Our advanced AI processes the text and generates a concise, easy-to-read summary instantly.
        </p>
      </div>

      {/*  3 */}
      <div className="flex flex-col items-center px-4 border-l border-black-300">
        <div className="w-35 h-35  mb-4">
          <img src={Slider} alt="TTS Icon" className="w-full h-full object-contain" />
        </div>
        
        <p className="text-black">
        Adjust fonts, spacing, and background colors for better accessibility.
        </p>
      </div>

      {/*  4 */}
      <div className="flex flex-col items-center px-4 border-l border-black-300">
        <div className="w-35 h-35 mb-4">
          <img src={Speech}alt="Privacy Icon" className="w-full h-full object-contain" />
        </div>
        
        <p className="text-black">
        Use the Text-to-Speech feature to hear the summary aloud.
        </p>
      </div>

    </div>
  </section>
  );
}