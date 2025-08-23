import googledriveIcon from "../../assets/GoogleDrive.png";
import githubIcon from "../../assets/SkillIcons/GitHub.svg";
import unityIcon from "../../assets/SkillIcons/Unity.svg";
import cSharpIcon from "../../assets/SkillIcons/Csharp.svg";
import aquamarineCapture from "../../assets/ImagesProjects/Aquamarine.png"


export default function Aquamarine() {
  return (
    <div className="flex flex-col px-4 py-2 md:px-8 md:py-6 rounded-lg border-1 border-cyan-400 shadow-cyan-400/80 shadow-lg">
      {/* ชื่อ Project */}
      <h2 className=" font-bold text-center mb-5">Aquamarine</h2>
      {/* รูป Project */}
      <img src={aquamarineCapture} className="mb-2 shadow shadow-black hover:scale-105 hover:shadow-md transition" />
      {/* คำอธิบาย */}
      <p className="mb-2 text-base">
        ธีสิสที่ร่วมสร้างกับทีม ได้รับหน้าที่ให้ทำเกี่ยวกับ coding และ implement ในส่วนของ Unity
        โดยเกมนี้เป็น narrative game ที่จะมีคัตซีนภายเกม</p>
        <p className="font-semibold mb-1 text-base">สิ่งที่ทำใน Project นี้</p>
        <ul className="text-base">
          <li className=" list-disc list-inside">ระบบพื้นฐานเช่น เดิน interact เป็นต้น</li>
          <li className=" list-disc list-inside">คัตซีน(Timeline)</li>
          <li className=" list-disc list-inside">ระบบ dialog</li>
          <li className=" list-disc list-inside">จัดแสงต่างๆในฉากเกม</li>
          <li className=" list-disc list-inside">อีเว้นท์</li>
          <li className=" list-disc list-inside">อื่นๆ (ยกเว้น ระบบเสียง,input system,scrolling background)</li>
        </ul>
      {/* ปุ่มลิงค์และTechStack */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2 h-full justify-center items-end mt-3">
        {/* Link Project */}
        <div className="flex justify-center md:justify-start gap-2">
          <a
            href="https://github.com/khonsaiinc/aquamarine"
            target="_blank"
            className=" bg-pink-500 px-6 py-2 rounded-2xl hover:bg-pink-400 hover:scale-110 hover:shadow-md hover:shadow-pink-400 transition"
          >
            <img src={githubIcon} className=" w-6 h-6 md:w-8 md:h-8" />
          </a>
          <a
            href="https://drive.google.com/drive/u/0/folders/1NKk_uGUbW8mteywXdejD7wTNhNI4h00v"
            target="_blank"
            className=" bg-lime-500 px-6 py-2 rounded-2xl hover:bg-lime-400 hover:scale-110 hover:shadow-md hover:shadow-lime-400 transition"
          >
            <img src={googledriveIcon} className=" w-6 h-6 md:w-8 md:h-8" />
          </a>
        </div>
        {/* Techstack */}
        <div className="flex justify-center md:justify-end items-center gap-1">
          <img src={cSharpIcon} className="w-8 h-8 md:w-12 md:h-12" />
          <img src={unityIcon} className="w-8 h-8 md:w-12 md:h-12" />
        </div>
      </div>
    </div>
  );
}
