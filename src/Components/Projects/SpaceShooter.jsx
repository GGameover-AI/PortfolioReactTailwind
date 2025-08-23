import googledriveIcon from "../../assets/GoogleDrive.png";
import githubIcon from "../../assets/SkillIcons/GitHub.svg";
import unityIcon from "../../assets/SkillIcons/Unity.svg";
import cSharpIcon from "../../assets/SkillIcons/Csharp.svg";
import spaceshooterCapture from "../../assets/ImagesProjects/space shooter.png";

export default function SpaceShooter() {
  return (
    <div className="flex flex-col px-4 py-2 md:px-8 md:py-6 rounded-lg border-1 border-cyan-400 shadow-cyan-400/80 shadow-lg">
      {/* ชื่อ Project */}
      <h2 className=" font-bold text-center mb-5">Space Shooter</h2>
      {/* รูป Project */}
      <img
        src={spaceshooterCapture}
        className="mb-2 shadow shadow-black hover:scale-105 hover:shadow-md transition"
      />
      {/* คำอธิบาย */}
      <p className="mb-2 text-base">
        เกมที่สร้างคนเดียวทั้งระบบและภาพเกม
        โดยผู้เล่นจะต้องค่อยทำลายศัตรูและไปให้ถึงด่านสุดท้าย
      </p>
      <p className=" font-semibold mb-1 text-base">Feature</p>
      <ul className="text-base">
        <li className=" list-disc list-inside">Wave ศัตรู</li>
        <li className=" list-disc list-inside">ประเภทศัตรูต่างๆ</li>
        <li className=" list-disc list-inside">Pattern การเกิดศัตรู</li>
        <li className=" list-disc list-inside">Items</li>
      </ul>

      {/* ปุ่มลิงค์และTechStack */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2 h-full justify-center items-end mt-3">
        {/* Link Project */}
        <div className="flex justify-center md:justify-start gap-2">
          <a
            href="https://github.com/GGameover303/Arcade-Shooting"
            target="_blank"
            className=" bg-pink-500 px-6 py-2 rounded-2xl hover:bg-pink-400 hover:scale-110 hover:shadow-md hover:shadow-pink-400 transition"
          >
            <img src={githubIcon} className="w-6 h-6 md:w-8 md:h-8" />
          </a>
          <a
            href="https://drive.google.com/file/d/1z-acwy48vfDi45FZMxY4ULVGxwqMc8YW/view?usp=drive_link"
            target="_blank"
            className=" bg-lime-500 px-6 py-2 rounded-2xl hover:bg-lime-400 hover:scale-110 hover:shadow-md hover:shadow-lime-400 transition"
          >
            <img src={googledriveIcon} className="w-6 h-6 md:w-8 md:h-8" />
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
