
import Ai from '../assets/Artificial Intelligence.svg';
import Design from '../assets/Design.svg';
import DataProtection from '../assets/Data Protection.svg';
import SpeechToText from '../assets/Speech To Text.svg';

export default function FeaturesSection() {
  return (
    <section className="bg-white py-12 px-6 m-40 mt-1 mb-2">
    <h2 className="text-3xl font-extrabold text-center mb-12">Features</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-4 text-center">
      
      {/* Feature 1 */}
      <div className="flex flex-col items-center px-4">
      
        <div className="w-35 h-35 mb-4">
          <img src={Ai} alt="AI Icon" className="w-full h-full object-contain" />
        </div>
        <h3 className="font-bold text-[20px] mb-2">AI-Powered Efficiency</h3>
        <p className="text-black">
          Save time with fast and accurate AI-driven text summarization.
        </p>
      </div>

      {/* Feature 2 */}
      <div className="flex flex-col items-center px-4 border-l border-black-300">
        <div className="w-35 h-35 mb-4 ">
          <img src={Design} alt="Dyslexia Icon" className="w-full h-full object-contain" />
        </div>
        <h3 className="font-bold text-[20px] mb-2 ">Dyslexia-Friendly Design</h3>
        <p className="text-black">
          Customizable fonts, spacing, and colors make reading easier for everyone, including those with learning differences.
        </p>
      </div>

      {/* Feature 3 */}
      <div className="flex flex-col items-center px-4 border-l border-black-300">
        <div className="w-35 h-35  mb-4">
          <img src={SpeechToText} alt="TTS Icon" className="w-full h-full object-contain" />
        </div>
        <h3 className="font-bold text-[20px] mb-2">Text-to-Speech Integration</h3>
        <p className="text-black">
          Listen to summaries aloud, making content accessible on the go.
        </p>
      </div>

      {/* Feature 4 */}
      <div className="flex flex-col items-center px-4 border-l border-black-300">
        <div className="w-35 h-35 mb-4">
          <img src={DataProtection}alt="Privacy Icon" className="w-full h-full object-contain" />
        </div>
        <h3 className="font-bold text-[20px] mb-2">Privacy & Security</h3>
        <p className="text-black">
          Your data is never stored or shared, ensuring full privacy protection.
        </p>
      </div>

    </div>
  </section>
  );
}
