
import NavbarSection from "../Components/Navbar";
import FooterSection from "../Components/FooterSection";

import Team from "../assets/Team.svg";
import Priyanka from "../assets/Team/Priyanka.png"
import Monish from '../assets/Team/monish.png';
import Amogh from '../assets/Team/amogh.png';
import Praphul from '../assets/Team/praphul.png';
import Sohan from '../assets/Team/sohan.png';

const teamMembers1 = [
    {
        name: 'Priyanka Badal',
        role: 'Project Manager',
        image: Priyanka,
      },
      {
        name: 'Monish Shrestha',
        role: 'UX/UI Designer',
        image: Monish,
      },
      {
        name: 'Amogh Shakya',
        role: 'Project Manager',
        image: Amogh,
      },
      
  ];
  const teamMembers2 = [
  {
    name: 'Praphul Shrestha',
    role: 'Backend Developer',
    image: Praphul,
  },
  {
    name: 'Sohan Maharjan',
    role: 'Frontend and Backend Developer',
    image: Sohan,
  },
];

const OurTeam = () => {
   
  return (
    <div className="w-full font-[Inter] bg-white text-gray-900 ">
      <NavbarSection />
      
      
      <h1 className="text-3xl font-extrabold text-center mb-5 mt-25 tracking-tight">Meet Our Team</h1>
    
    
      <section className="bg-[#2d3142] text-white py-5 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        
      
        <img 
          src={Team} 
          alt="Platform Illustration" 
          className="mb-10 w-full max-w-3xl" 
        />

        {/* Text */}
        <p className="text-sm md:text-base leading-relaxed max-w-4xl text-gray-200">
        We are a team of students and aspiring AI developers committed to making reading and learning more accessible for everyone. Our mission is to simplify text, enhance comprehension, and empower individuals with learning differences through cutting-edge AI and NLP technology.
        </p>
      </div>

    </section>

    <section className="py-16 px-4 md:px-12 lg:px-24 bg-white text-center">


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 justify-items-center m-50 mt-5 mb-5">
        {teamMembers1.map((member, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-52 h-64 object-cover rounded-md border-2 border-orange-400 shadow-md"
            />
            <h3 className="font-semibold mt-4">{member.name}</h3>
            <p className="text-sm text-orange-600 font-medium">{member.role}</p>
          </div>
          
          
        ))}
        </div>
        
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-0 justify-items-center mt-20 m-65 mb-0">
        {teamMembers2.map((member, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-52 h-64 object-cover rounded-md border-2 border-orange-400 shadow-md"
            />
            <h3 className="font-semibold mt-4">{member.name}</h3>
            <p className="text-sm text-orange-600 font-medium">{member.role}</p>
          </div>
          
      
    ))}
    </div>
      
    </section>
    
    
      <FooterSection/>
    </div>
  );
};

export default OurTeam;
