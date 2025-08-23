import { Element } from "react-scroll";
import splash from "../assets/splash.jpg";

export default function About() {
  return (
    <Element name="About">
      <section className="lg:grid lg:grid-cols-2 bg-gray-900 text-white px-20 py-16 gap-10 items-center">
        <div className="hidden lg:block">
          <img src={splash}/>
        </div>
        <div>
          <h1 className="text-cyan-400 text-center font-bold text-2xl md:text-5xl mb-5">About me</h1>
          <div className="text-sm sm:text-md md:text-lg space-y-6">
            <p>
              ผมสำเร็จการศึกษาจากสาขาการพัฒนาเกม{" "}
              <span className="text-cyan-400">
                ทำให้มีพื้นฐานด้านการออกแบบระบบ และการเขียนโปรแกรม
              </span>{" "}
              ปัจจุบันผมมุ่งเน้นเส้นทางสาย{" "}
              <span className="text-cyan-400">Frontend Developer</span>{" "}
              โดยสนใจการพัฒนาเว็บไซต์ที่เน้นทั้งความสวยงาม ความทันสมัย
              และประสบการณ์ผู้ใช้ที่ดี
            </p>
            <p>
              ผมกำลังพัฒนาทักษะด้าน{" "}
              <span className="text-cyan-400">
                HTML, CSS, JavaScript, React{" "}
              </span>{" "}
              และ <span className="text-cyan-400">Tailwind CSS</span>{" "}
              เพื่อสร้างเว็บไซต์ที่ตอบโจทย์การใช้งานจริง
              และมีเป้าหมายที่จะเติบโตในสายงาน Web Development
              พร้อมสร้างสรรค์ผลงานที่สร้างคุณค่าให้กับผู้ใช้
            </p>
          </div>
        </div>
      </section>
    </Element>
  );
}
