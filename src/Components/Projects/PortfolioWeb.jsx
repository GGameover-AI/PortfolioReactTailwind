import webIcon from "../../assets/webIcon.png";
import reactIcon from "../../assets/SkillIcons/React.svg"
import tailwindcssIcon from "../../assets/SkillIcons/Tailwind CSS.svg"
import portfoliowebCapture from "../../assets/ImagesProjects/PortfolioWeb.png"


export default function PortfolioWeb() {
  return (
    <div className="flex flex-col px-4 py-2 md:px-8 md:py-6 rounded-lg border-1 border-cyan-400 shadow-cyan-400/80 shadow-lg">
      {/* ชื่อ Project */}
      <h2 className=" font-bold text-center mb-5">Portfolio Website</h2>
      {/* รูป Project */}
      <img src={portfoliowebCapture} className="mb-2 shadow shadow-black hover:scale-105 hover:shadow-md transition" />
      {/* คำอธิบาย */}
      <p className="mb-5 text-base">
        เว็บไซต์สำหรับเก็บสะสมงานและฝึกการใช้ Tailwind CSS ใช้งานง่าย และเหมาะสำหรับใช้แสดงผลงานตัวเอง
      </p>
      {/* ปุ่มลิงค์และTechStack */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2 h-full justify-center items-end mt-3">
        <div className="flex justify-center md:justify-start gap-2">
          <a
            href=""
            className=" bg-pink-500 px-6 py-2 rounded-2xl hover:bg-pink-400 hover:scale-110 hover:shadow-md hover:shadow-pink-400 transition"
          >
            <img src={webIcon} className=" w-6 h-6 md:w-8 md:h-8" />
          </a>
        </div>
        <div className="flex justify-center md:justify-end items-center gap-1">
          <img src={reactIcon} className="w-8 h-8 md:w-12 md:h-12" />
          <img src={tailwindcssIcon} className="w-8 h-8 md:w-12 md:h-12" />
        </div>
      </div>
    </div>
  );
}
