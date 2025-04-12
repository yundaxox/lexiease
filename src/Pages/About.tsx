import NavbarSection from "../Components/Navbar";
import FooterSection from "../Components/FooterSection";
import AboutUs from "../assets/About.svg";
import Goal from "../assets/Goal.svg";
import Vision from "../assets/Vision.svg";
import Read from "../assets/Read.svg";
import Ai from "../assets/Artificial Intelligence.svg";
import Rocket from "../assets/Rocket.svg";
import GraduationCap from "../assets/Graduation Cap.svg";
import Shield from "../assets/shield.svg";
import User from "../assets/user.svg";
import Charts from "../assets/charts.svg";

const About = () => {
  const benefits = [
    {
      icon: User,
      title: "User-Centric Design",
      description:
        "Build with real user needs in mind. We prioritize the development of safe and beneficial AI technology.",
    },
    {
      icon: Shield,
      title: "Privacy & Security",
      description:
        "We don’t store or track any data on our platform. We’re committed to keeping your content safe and secure.",
    },

    {
      icon: Charts,
      title: "Continuous Improvement",
      description:
        "We’re dedicated to refining our tool based on user feedback and accessibility research.",
    },
  ];
  return (
    <div className="w-full font-[Inter] bg-white text-gray-900 ">
      <NavbarSection />

      <h1 className="text-3xl font-extrabold text-center mb-5 mt-25 tracking-tight">
        About Us
      </h1>
      <section className="bg-[#2d3142] text-white py-16 px-6 md:px-12 lg:px-24 mt-0">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
          <div className="flex-1 flex flex-col items-center">
            <img
              src={AboutUs}
              alt="About us illustration"
              className="w-full max-w-md"
            />
            <button className="bg-[#ef8354] content-center text-white font-bold px-5 py-3 rounded-md cursor-pointer shadow-md hover:bg-orange-600 transition">
              Get Started
            </button>
          </div>

          <div className="flex-1 text-center  lg:text-left">
            <h2 className="text-3xl md:text-4xl  font-extrabold  mb-4">
              Empowering Readers,
              <br />
              Simplifying Text
            </h2>
            <p className="text-lg  text-gray-300 mb-6">
              We believe that information should be accessible to everyone. Our
              AI-powered summarization tool is designed to enhance
              comprehension, save time, and support individuals with learning
              differences. Whether you’re a student, educator, or professional,
              our tool helps you extract key insights effortlessly.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 md:px-12 lg:px-24 bg-white text-black">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
          {/* Mission */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <img src={Goal} alt="goal icon" className="text-5xl mb-4" />

            <p className="text-sm max-w-xs">
              To develop smart, accessible, and user-friendly AI solutions that
              make complex text easier to read and understand.
            </p>
          </div>

          {/* Vision */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-bold mb-2">Our Vision</h3>
            <img src={Vision} alt="vision icon" className="text-5xl mb-4" />

            <p className="text-sm max-w-xs">
              A world where everyone, regardless of learning differences, can
              access and understand information effortlessly.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 px-6 m-30 mt-1 mb-2">
        <h2 className="text-3xl font-extrabold text-center mb-12">
          What We Do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 text-center">
          <div className="flex flex-col items-center px-4">
            <div className="w-35 h-35 mb-4">
              <img
                src={Ai}
                alt="AI Icon"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="font-bold text-[20px] mb-2">
              Simplify Text with AI
            </h3>
            <p className="text-black">
              Our tool breaks down lengthy, complex text into clear, concise
              summaries.
            </p>
          </div>

          <div className="flex flex-col items-center px-4 border-l border-black-300">
            <div className="w-35 h-35 mb-4 ">
              <img
                src={Read}
                alt="Read Icon"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="font-bold text-[20px] mb-2 ">
              Improve Reading Comfort
            </h3>
            <p className="text-black">
              We integrate dyslexia-friendly features, including customizable
              fonts and text-to-speech functionality.
            </p>
          </div>

          <div className="flex flex-col items-center px-4 border-l border-black-300">
            <div className="w-35 h-35  mb-4">
              <img
                src={GraduationCap}
                alt="Cap Icon"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="font-bold text-[20px] mb-2">
              Foster Inclusive Learning
            </h3>
            <p className="text-black">
              Bridging the accessibility gap for learners with simplified,
              empowering information.
            </p>
          </div>

          <div className="flex flex-col items-center px-4 border-l border-black-300">
            <div className="w-35 h-35 mb-4">
              <img
                src={Rocket}
                alt="Rocket Icon"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="font-bold text-[20px] mb-2">Boost Efficiency</h3>
            <p className="text-black">
              Saves time by quickly distilling key information from complex
              texts.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col items-center px-4 border-l border-black-300">
          <h3 className="text-3xl font-extrabold mt-10 mb-2">
            {" "}
            Why We Started This Project
          </h3>
          <p className="text-black text-center mb-10 ">
            Reading difficulties, especially for individuals with dyslexia, can
            create barriers to education and everyday
            <br /> tasks. We saw a gap in accessibility tools and decided to
            leverage AI and NLP to create a dyslexia-friendly <br />{" "}
            summarization tool that promotes inclusive learning.
          </p>
        </div>
      </section>

      <section className="text-left py-10 px-4 bg-white ">
        <h2 className="text-3xl  text-center font-extrabold tracking-tight mb-5">
          Our Commitment
        </h2>
        <div className="relative flex flex-col lg:flex-row justify-center items-stretch gap-6 lg:gap-0 max-w-6xl mx-auto divide-x-1">
          {benefits.map((item, index) => (
            <div key={index} className="flex-1 px-4">
              <div className="bg-[#2d3142] text-white p-6 rounded-lg h-full">
                <div className="flex justify-left">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-5 h-5 mb-2"
                  />
                </div>
                <h3 className="font-semibold mt-2 mb-1 justify-center">
                  {item.title}
                </h3>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <FooterSection />
    </div>
  );
};

export default About;
