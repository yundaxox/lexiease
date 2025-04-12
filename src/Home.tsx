import { useState } from "react";
import FeaturesSection from "./Components/FeaturesSection";
import HowItWorks from "./Components/HowItWorksSection";
import BenefitSection from "./Components/BenefitsSection";
import FooterSection from "./Components/FooterSection";
import upload from "./assets/Upload.svg";
import HeroSection from "./Components/HeroSection";
import WhatIsItSection from "./Components/WhatIsItSection";
import HeroAndQuesSection from "./Components/HeroAndQuesSection";
import FaqSection from "./Components/FaqSection";
import { FaUndo, FaPlay, FaRedo } from "react-icons/fa";
import Navbar from "./Components/Navbar";

const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    const text = event.target?.result as string;
    setInputText(text || "");
  };
  reader.readAsText(file); //  only .txt
};

const Home = () => {
  const [inputText, setInputText] = useState("");
  const [activeTab, setActiveTab] = useState<
    "Summarize" | "Font" | "Text to Speech" | "Customize"
  >("Summarize");
  {
    /*const [outputText, setOutputText] = useState("");*/
  }

  const [outputText, setOutputText] = useState("");

  const handleSummarize = () => {
    if (!inputText.trim()) return;

    // Basic extractive summarization placeholder
    const sentences = inputText.split(/(?<=[.!?])\s+/); // Split into sentences
    const summary = sentences
      .slice(0, Math.ceil(sentences.length / 3))
      .join(" ");

    setOutputText(summary);
  };

  const [fontFamily, setFontFamily] = useState("inter");
  const [fontSize, setFontSize] = useState(16); // in px

  const [lineSpacing, setLineSpacing] = useState(1.5); // line-height
  const [wordSpacing, setWordSpacing] = useState(0); // px

  const [customFontColor, setCustomFontColor] = useState("black");
  const [customBgColor, setCustomBgColor] = useState("white");
  const [customDarkMode, setCustomDarkMode] = useState(false);

  return (
    <div className="w-full font-[Inter] bg-white text-gray-900 ">
      {/* Navbar */}

      <Navbar />

      {/* Summarize Section */}

      <div className="pl-50 pr-50 w-full max-w-5x mx-center p-9 mt-20 bg-white  round-lg ">
        {/* Tab Header */}
        <div className="flex flex-wrap border-b border-gray-300 text-l font-medium text-black space-x-8 mb-10">
          {["Summarize", "Font", "Text to Speech", "Customize"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab as any)}
              className={`pb-2 ${
                activeTab === tab
                  ? " px-6 border-b-4 border-[#ef8354] text-[#ef8354]"
                  : "cursor-pointer text-black hover:text-[#ef8354]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        {activeTab === "Font" && (
          <div className="flex items-end flex-wrap gap-10 mt-2">
            {/* Font Dropdown */}
            <div className="flex flex-col ">
              <label className="text-sm font-medium mb-1">Font</label>
              <select
                className="border border-black rounded px-3 py-1 text-sm"
                value={fontFamily}
                onChange={(e) => setFontFamily(e.target.value)}
              >
                <option value="inter">Inter</option>
                <option value="arial">Arial</option>
                <option value="opensans">Open Sans</option>
              </select>
            </div>

            {/* Font Color Dropdown */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Font Color</label>
              <select
                className="border border-black rounded px-3 py-1 text-sm"
                value={customFontColor}
                onChange={(e) => setCustomFontColor(e.target.value)}
              >
                <option value="black">Black</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="white">White</option>
              </select>
            </div>

            {/* Font Size Slider */}
            <div className="flex flex-col w-56">
              <label className="text-sm font-medium mb-1">Font Size</label>
              <input
                type="range"
                min="10"
                max="36"
                value={fontSize}
                onChange={(e) => setFontSize(parseInt(e.target.value))}
                className="accent-blue-500 w-full"
              />
            </div>

            {/* Spacing Slider */}
            <div className="flex flex-col w-56">
              <label className="text-sm font-medium mb-1">Spacing</label>
              <input
                type="range"
                min="1"
                max="3"
                step="0.1"
                value={lineSpacing}
                onChange={(e) => setLineSpacing(parseFloat(e.target.value))}
                className="accent-blue-500 w-full"
              />
            </div>
            <div className="flex flex-col w-56">
              <label className="text-sm font-medium mb-1">Word Spacing</label>
              <input
                type="range"
                min="0"
                max="20"
                value={wordSpacing}
                onChange={(e) => setWordSpacing(parseInt(e.target.value))}
                className="accent-blue-500 w-full"
              />
            </div>
          </div>
        )}

        {activeTab === "Text to Speech" && (
          <div className="flex flex-wrap justify-center items-center gap-6 mt-10">
            {/* Rewind Button */}
            <button className="bg-[#ef8354] text-white cursor-pointer rounded-full w-10 h-10 flex items-center justify-center text-lg shadow-md hover:scale-110 transition">
              <FaUndo />
            </button>

            {/* Play Button (center and bigger) */}
            <button className="bg-[#ef8354] text-white cursor-pointer rounded-full w-14 h-14 flex items-center justify-center text-2xl shadow-md hover:scale-110 transition">
              <FaPlay />
            </button>

            {/* Forward Button */}
            <button className="bg-[#ef8354] text-white cursor-pointer rounded-full w-10 h-10 flex items-center justify-center text-lg shadow-md hover:scale-110 transition">
              <FaRedo />
            </button>
          </div>
        )}

        {activeTab === "Customize" && (
          <div className="flex items-end flex-wrap gap-10 mt-2">
            {/* Font Color Dropdown */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">Font Color</label>
              <select
                className="border border-black rounded px-3 py-1 text-sm"
                value={customFontColor}
                onChange={(e) => setCustomFontColor(e.target.value)}
              >
                <option value="black">Black</option>
                <option value="white">White</option>
                <option value="orange">Orange</option>
                <option value="blue">Blue</option>
              </select>
            </div>

            {/* Background Color Dropdown */}
            <div className="flex flex-col">
              <label className="text-sm font-medium mb-1">
                Background Color
              </label>
              <select
                className="border border-black rounded px-3 py-1 text-sm"
                value={customBgColor}
                onChange={(e) => setCustomBgColor(e.target.value)}
              >
                <option value="white">White</option>
                <option value="gray">Gray</option>
                <option value="black">Black</option>
                <option value="orange">Orange</option>
              </select>
            </div>

            {/* Mode Toggle */}
            <div className="flex flex-col items-start">
              <label className="text-sm font-medium mb-1">Mode</label>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={customDarkMode}
                  onChange={(e) => setCustomDarkMode(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-10 h-6 bg-gray-300 rounded-full peer peer-checked:bg-orange-500 transition-all duration-300"></div>
                <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-all duration-300 peer-checked:translate-x-4"></div>
              </label>
            </div>
          </div>
        )}

        <div className="relative grid grid-cols-2 gap-4 mt-10 pb-5">
          <div className="relative">
            <textarea
              className="border p-4 w-full h-90 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
              placeholder="Enter your text here and press summarize"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            ></textarea>

            <div className="absolute bottom-4 left-3 bg-[#ef8354] text-white text-xs font-semibold px-3 py-1 rounded-full pointer-events-none">
              200 words
            </div>
          </div>
          <div className="relative">
            <textarea
              className="border p-4 w-full h-90 rounded-md bg-gray-100 focus:outline-none resize-none"
              placeholder="Summary output"
              value={outputText}
              readOnly
              style={{
                fontFamily:
                  fontFamily === "inter"
                    ? "Inter"
                    : fontFamily === "opensans"
                    ? "'Open Sans'"
                    : fontFamily,
                fontSize: `${fontSize}px`,
                color: customFontColor,
                lineHeight: lineSpacing,
                wordSpacing: `${wordSpacing}px`,
                backgroundColor: customDarkMode ? "#1a1a1a" : customBgColor,
              }}
            ></textarea>

            <div className="absolute bottom-4 left-3 bg-[#ef8354] text-white text-xs font-semibold px-3 py-1 rounded-full pointer-events-none">
              100 words
            </div>
          </div>
        </div>

        <div className="flex gap-6 mt-5">
          <label className="flex cursor-pointer items-center justify-center rounded-xl bg-[#ef8354] px-2 py-1 text-l font-semibold text-white shadow-sm hover:bg-orange-600 transition">
            <img
              src={upload}
              alt="uploadSvg"
              className="uploadSvg justify-left pr-2"
            />
            Upload file
            <input
              type="file"
              accept=".txt"
              className="hidden"
              onChange={handleFileUpload}
            />
          </label>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleSummarize}
            className="bg-[#ef8354] contecnt-center text-white font-bold px-8 py-2 rounded-md cursor-pointer shadow-md hover:bg-orange-600 transition"
          >
            Summarize
          </button>
        </div>
      </div>
      <HeroSection />
      <WhatIsItSection />
      <FeaturesSection />
      <HowItWorks />
      <BenefitSection />

      <HeroAndQuesSection />
      <FaqSection />
      <FooterSection />
    </div>
  );
};

export default Home;
