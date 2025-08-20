import webIcon from "../../assets/webIcon.png";
import reactIcon from "../../assets/Skill Icons/React.svg"
import tailwindcssIcon from "../../assets/Skill Icons/Tailwind CSS.svg"
import portfoliowebCapture from "../../assets/Images Projects/PortfolioWeb.png"


export default function PortfolioWeb() {
  return (
    <div className="flex flex-col px-8 py-6 rounded-lg border-1 border-cyan-400 shadow-cyan-400/80 shadow-lg">
      {/* ชื่อ Project */}
      <h2 className=" font-bold text-center mb-5">Portfolio Website</h2>
      {/* รูป Project */}
      <img src={portfoliowebCapture} className="mb-2 shadow shadow-black hover:scale-105 hover:shadow-md transition" />
      {/* คำอธิบาย */}
      <p className="mb-5">
        เว็บไซต์สำหรับเก็บสะสมงานและฝึกการใช้ Tailwind CSS
      </p>
      {/* ปุ่มลิงค์และTechStack */}
      <div className="grid grid-cols-2 gap-2 h-full justify-center items-end mt-3">
        <div className="flex items-center gap-2">
          <a
            href=""
            className=" bg-pink-500 px-6 py-2 rounded-2xl hover:bg-pink-400 hover:scale-110 hover:shadow-md hover:shadow-pink-400 transition"
          >
            <img src={webIcon} className=" w-8 h-8" />
          </a>
        </div>
        <div className="flex justify-end items-center gap-1">
          <img src={reactIcon} className="w-12 h-12" />
          <img src={tailwindcssIcon} className="w-12 h-12" />
        </div>
      </div>
    </div>
  );
}
