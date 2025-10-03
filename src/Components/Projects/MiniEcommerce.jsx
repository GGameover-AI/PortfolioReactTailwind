//import githubIcon from "../../assets/SkillIcons/GitHub.svg";
//import reactIcon from "../../assets/SkillIcons/React.svg"
//import bootstrapIcon from "../../assets/SkillIcons/Bootstrap.svg"
//import nodejsIcon from "../../assets/SkillIcons/Nodejs.svg"
//import expressIcon from "../../assets/SkillIcons/Express.svg"
//import mongodbIcon from "../../assets/SkillIcons/MongoDB.svg"
import comingsoonIMG from "../../assets/ImagesProjects/ComingSoon.jpg"
import angularIcon from "../../assets/SkillIcons/Angular.svg";
import tailwindcssIcon from "../../assets/SkillIcons/Tailwind CSS.svg";


export default function MiniEcommerce() {
  return (
    <div className="flex flex-col px-4 py-2 md:px-8 md:py-6 rounded-lg border-1 border-cyan-400 shadow-cyan-400/80 shadow-lg">
      {/* ชื่อ Project */}
      <h2 className=" font-bold text-center mb-5">miniEcommerce</h2>
      {/* รูป Project */}
      <img src={comingsoonIMG} className="mb-2 shadow shadow-black hover:scale-105 hover:shadow-md transition" />
      {/* คำอธิบาย */}
      <p className="mb-5 text-base">
        WIP
      </p>
      {/* ปุ่มลิงค์และTechStack */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2 h-full justify-center items-end mt-3">
        <div className="flex justify-center md:justify-start gap-2">
          {/* <a
            href="https://github.com/GGameover-AI/Todo_List"
            className=" bg-pink-500 px-6 py-2 rounded-2xl hover:bg-pink-400 hover:scale-110 hover:shadow-md hover:shadow-pink-400 transition"
          >
            <img src={githubIcon} className=" w-6 h-6 md:w-8 md:h-8" />
          </a> */}
        </div>
        <div className="flex justify-center md:justify-end items-center gap-1">
          <img src={angularIcon} className="w-8 h-8 md:w-12 md:h-12" />
          <img src={tailwindcssIcon} className="w-8 h-8 md:w-12 md:h-12" />
          <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/.NET_Core_Logo.svg/512px-.NET_Core_Logo.svg.png?20210328084203'} className="w-8 h-8 md:w-12 md:h-12" />
        </div>
      </div>
    </div>
  );
}
