
import NavbarSection from "../Components/Navbar";
import FooterSection from "../Components/FooterSection";
import FaqIllustration from "../assets/faq.svg";

const faqs = [
    {
      question: "Q1. What is this tool?",
      answer:
        "Our tool is an AI-powered text summarization solution that converts lengthy, complex content into clear, concise summaries—designed especially with dyslexic readers in mind.",
    },
    {
      question: "Q2. How does it work?",
      answer:
        "Simply upload or paste your text, and our advanced AI processes it to generate an accessible summary. You can then customize the display with adjustable fonts, spacing, and even use text-to-speech for auditory learning.",
    },
    {
      question: "Q3. Who can benefit from using it?",
      answer:
        "Whether you're a student, educator, or anyone who finds dense text challenging, our tool is built to bridge the accessibility gap and enhance learning for everyone.",
    },
    {
      question: "Q4. What file formats are supported?",
      answer:
        "You can upload various file formats, including PDFs, DOCX, and TXT files, ensuring a seamless experience regardless of the document type.",
    },
    {
      question: "Q5. Can I customize the readability settings?",
      answer:
        "Yes! You can easily adjust fonts, line spacing, background colors, and activate text-to-speech functionality to tailor the experience to your personal needs.",
    },
    {
      question: "Q6. What is this tool?",
      answer:
        "Our tool is an AI-powered text summarization solution that converts lengthy, complex content into clear, concise summaries—designed especially with dyslexic readers in mind.",
    },
  ];
  
const FAQ = () => {
  

  return (
    <div className="w-full font-[Inter] bg-white text-black ">
      <NavbarSection />
      <h1 className="text-3xl font-extrabold text-center mb-5 mt-25 tracking-tight">Frequently Asked Questions</h1>
    
    
    <section className="bg-[#2d3142] text-white py-5 px-6 md:px-12 lg:px-24">
    <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
      
    {/* Text */}
    <p className="text-sm md:text-base leading-relaxed max-w-4xl text-white mb-5">
    Everything you need to know our tool.
      </p>
      <img 
        src={FaqIllustration} 
        alt="Platform Illustration" 
        className="mb-10 w-full max-w-3xl" 
      />

      
    </div>

  </section>
      
  
      <section className="max-w-4xl mx-auto px-4 py-12">
        
        <div className="space-y-8">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b pb-4">
              <h3 className="font-semibold text-base sm:text-lg mb-1">
                {faq.question}
              </h3>
              <p className="text-black text-sm sm:text-base">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    );
 

      <FooterSection/>
    </div>
  );
};

export default FAQ;
