
import image1 from '../assets/image1.svg';
export default function HeroAndQuesSection() {
  return (
    <div className="flex flex-col items-center justify-center  bg-white mt-10 p-6">
      <h1 className="text-3xl font-extrabold text-center mb-4">
        Ready to simplify your text?
      </h1>
      
        <div className="flex justify-center">
        <button className="bg-[#ef8354] contecnt-center text-white font-bold px-8 py-2 rounded-md cursor-pointer shadow-md hover:bg-orange-600 transition">Summarize</button>
        </div>

        <div className="flex justify-center mt-15">
      <img
        src= {image1} 
        alt="Confused brain mascot"
        className="w-full h-full object-contain"
      />
    </div>
      </div>
      
      
  )
}