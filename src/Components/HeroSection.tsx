import Brains from '../assets/Brains with words.svg'

const HeroSection = () => {
  return (
    
    <section className="bg-[#2d3142] text-white py-1 px-6 md:px-25">
      <div className="grid md:grid-cols-2 gap-30 items-center">
        {/* Text Content */}
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-30 tracking-tight">
            Dyslexia - Friendly <br />
            <span className="text-white">Text Summarization Tool</span>
          </h1>
          <h2 className="md:text-5xl font-extrabold text-white mb-4 tracking-tight whitespace-nowrap">
            Simplify Text, Enhance Understanding
          </h2>
          <p className="text-md font-medium md:text-md text-gray-300 mb-4 whitespace-nowrap">
            A dyslexia-friendly text summarization tool that makes reading easier for students, <br></br>educators, and individuals with learning differences.
          </p>
          <button className="bg-[#ef8354] content-center text-white font-bold px-5 py-3 rounded-md cursor-pointer shadow-md hover:bg-orange-600 transition">Get Started</button>
        </div>

        {/* Image */}
    
        <div className="flex justify-center md:justify-end">
          <img
            src={Brains}
            alt="Brain with letters"
            className=" max-w-full h-auto "
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
