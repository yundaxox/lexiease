import Brain from '../assets/Brain.svg'

const WhatIsItSection = () => {


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-6 md:p-6 bg-white ">
    {/* Image Section */}
    <div className="flex justify-center ">
      <img
        src= {Brain} 
        alt="Confused brain mascot"
        className="w-80 h-80 object-contain"
      />
    </div>

    {/* Text Section */}
    <div className="max-w-md text-center md:text-center">
        <h2 className="text-4xl font-extrabold mb-4 tracking-tight">What is it ?</h2>
        <p className="text-black-700">
          Our AI-powered tool helps users summarize complex text, making it
          more readable for individuals with dyslexia, educators, and students.
        </p>
      </div>
  </div>
    
  );
}
export default WhatIsItSection;