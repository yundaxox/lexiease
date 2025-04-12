import Student from '../assets/student.svg';
import UpArrow from '../assets/uparrow.svg';
import Dots from '../assets/3dots.svg';


export default function BenefitSection() {
  const benefits = [
    {
      icon: Student,
      title: 'Students',
      description: 'Summarize or shorten study notes in simple words',
    },
    {
      icon: UpArrow,
      title: 'Educators',
      description: 'To make them easier to teach dyslexic people',
    },
    
    {
      icon: Dots,
      title: 'People with Dyslexia',
      description: 'Simplify reading materials for better comprehension',
      
    },
  ];

  return (
    <section className="text-left py-10 px-4 bg-white ">
      <h2 className="text-3xl  text-center font-extrabold mb-10">Who can Benefit ?</h2>
      <div className="relative flex flex-col lg:flex-row justify-center items-stretch gap-6 lg:gap-0 max-w-5xl mx-auto divide-x-1">
        {benefits.map((item, index) => (
          <div key={index} className="flex-1 px-4">
            <div className="bg-gray-800 text-white p-6 rounded-lg h-full">
              <div className="flex justify-left">
                <img src={item.icon} alt={item.title} className="w-5 h-5 mb-2" />
              </div>
              <h3 className="font-semibold mt-2 mb-1 justify-center">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          </div>
        ))}

        {/* Vertical dividers for large screens */}
        
        
          
        
   
      </div>
    </section>
  );
}
