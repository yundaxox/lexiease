import { useState } from "react";

const Font = () => {
  const [inputText, setInputText] = useState("");
  {/*const [outputText, setOutputText] = useState("");*/}
  
  return (
    <div className="w-full font-[Inter] bg-gray-50 text-gray-900">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 shadow-md bg-white fixed top-0 w-full z-10">
        <div className="w-25 h-12 bg-gray-300 rounded"></div>
        
        <ul className=" flex gap-16 ">
          {[   'Home', 'About', 'Features', 'Our Team', 'Contact', 'FAQ'].map((item) => (
            <li key={item} className="cursor-pointer font-medium hover:text-orange-500 transition ">{item}</li>
          ))}
        </ul>
      </nav>
      
      
      {/* Summarize Section */}
      <div className="pl-50 pr-50 w-full max-w-5x mx-center p-9 mt-20 bg-white shadow-lg round-lg">
        <div className="flex border-b-1 text-1xl border-white l-5">
          <a href="Summarize.tsx">
          {['Summarize', 'Font', 'Text to Speech', 'Customize'].map((tab) => (
            <button
              key={tab}
              className={`p-3 px-6 cursor-pointer font-medium ${tab === 'Font' ? 'border-b-4 border-orange-600' : 'hover:text-orange-500 transition'}`}
            >
              {tab}
            </button>
          ))}</a>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-10">
          <textarea
            className="border p-4 w-full h-90  rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Enter your text here and press summarize"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          ></textarea>
          <textarea
            className="border p-4 w-full h-90 rounded-md bg-gray-100 focus:outline-none"
            placeholder="Summary output"
           
            readOnly
          ></textarea>
        </div>
        <div className="flex gap-6 mt-10">
            
          <button className="border px-6 py-2 rounded-md font-bold cursor-pointer shadow-sm hover:bg-gray-200 transition">Upload file</button>
          <button className="bg-orange-600 text-white font-bold px-6 py-2 rounded-md cursor-pointer shadow-md hover:bg-orange-700 transition">Summarize</button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="w-full pl-50 bg-gradient-to-r from-orange-100 to-orange-300 py-24 text-nowrap mt-16">
        <h1 className="text-5xl font-extrabold pt-90 align">Simplify Text, Enhance Understanding</h1>
        <p className="mt-2 text-2xl text-gray-700 mt-5 mx-auto font-semibold">A dyslexia-friendly text summarization tool that makes reading easier for students,<br></br> educators, and individuals with learning differences.</p>
        <button className="mt-4 bg-orange-600 text-white font-semibold px-6 py-3 cursor-pointer rounded-md shadow-md hover:bg-orange-700 transition">Get started</button>
      </div>

      {/* Hero Section */}
      <div className="w-full pl-200 py-4 text-center  text-nowrap mt-40 mb-40">
        <h1 className="text-[50px] pb-5 font-extrabold text-center ">What is it?</h1>
        <p className="text-gray-700 text-[21px] mx-auto font-regular">Our AI-powered tool helps users summarize complex text,<br></br> making it more readable for individuals with dyslexia,<br></br> educators, and students.</p>
        
      </div>
      
      {/* Features Section */}
      <div className="text-center mt-20">
        <h2 className="text-3xl font-extrabold">Features</h2>
        <div className=" grid grid-cols-4 gap-5 mt-6 flex flex-row-reverse  ">
        
          {['', '', '', ''].map((feature) => (
            <div key={feature} className="bg-gray-300  p-30 w-30 rounded-lg shadow-md">{feature}</div>
            
             ))}
        </div>
        
        
        
      </div>
      
      {/* How it Works Section */}
      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold">How it works?</h2>
        <div className="grid grid-cols-4 gap-6 mt-6">
          {['Upload document', 'AI Processing', 'Adjust readability', 'Listen to summary'].map((step) => (
            <div key={step} className="bg-gray-300 p-8 rounded-lg shadow-md">{step}</div>
          ))}
        </div>
      </div>
      
      {/* Who Can Benefit Section */}
      <div className="text-center mt-20">
        <h2 className="text-3xl font-bold">Who can benefit?</h2>
        <div className="grid grid-cols-3 gap-6 mt-6">
          {['Students', 'Educators', 'People with Dyslexia'].map((group) => (
            <div key={group} className="border p-8 rounded-lg shadow-md">{group}</div>
          ))}
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="text-center mt-20 bg-gray-200 py-12">
        <h2 className="text-3xl font-bold">Ready to simplify your text?</h2>
        <button className=" cursor-pointer mt-4 bg-orange-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-orange-700 transition">Summarize</button>
      </div>
      
      {/* Footer */}
      <footer className="mt-20 bg-gray-900 text-white p-6 text-center">
        <p>© Dyslexic OP </p>
      </footer>
    </div>
  );
};

export default Font;
