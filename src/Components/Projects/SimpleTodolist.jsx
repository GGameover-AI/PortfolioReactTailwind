import githubIcon from "../../assets/Skill Icons/GitHub.svg";
import reactIcon from "../../assets/Skill Icons/React.svg"
import bootstrapIcon from "../../assets/Skill Icons/Bootstrap.svg"
import nodejsIcon from "../../assets/Skill Icons/Nodejs.svg"
import expressIcon from "../../assets/Skill Icons/Express.svg"
import mongodbIcon from "../../assets/Skill Icons/MongoDB.svg"
import todolistCapture from "../../assets/Images Projects/todoCapture.png"


export default function SimpleTodolist() {
  return (
    <div className="flex flex-col px-8 py-6 rounded-lg border-1 border-cyan-400 shadow-cyan-400/80 shadow-lg">
      {/* ชื่อ Project */}
      <h2 className=" font-bold text-center mb-5">SimpleTodolist</h2>
      {/* รูป Project */}
      <img src={todolistCapture} className="mb-2 shadow shadow-black hover:scale-105 hover:shadow-md transition" />
      {/* คำอธิบาย */}
      <p className="mb-5">
        การทำเว็บ todolist อย่างง่ายเพื่อศึกษาทำความเข้าใจ CRUD และ RESTful API ระหว่าง Frontend กับ Backend และใช้ MongoDB เพื่อเก็บข้อมูลด้วย ODM(Moongosedb)
      </p>
      {/* ปุ่มลิงค์และTechStack */}
      <div className="grid grid-cols-2 gap-2 h-full justify-center items-end mt-3">
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/GGameover-AI/Todo_List"
            className=" bg-pink-500 px-6 py-2 rounded-2xl hover:bg-pink-400 hover:scale-110 hover:shadow-md hover:shadow-pink-400 transition"
          >
            <img src={githubIcon} className=" w-8 h-8" />
          </a>
        </div>
        <div className="flex justify-end items-center gap-1">
          <img src={reactIcon} className="w-12 h-12" />
          <img src={bootstrapIcon} className="w-12 h-12" />
          <img src={nodejsIcon} className="w-12 h-12" />
          <img src={expressIcon} className="w-12 h-12" />
          <img src={mongodbIcon} className="w-12 h-12" />
        </div>
      </div>
    </div>
  );
}
