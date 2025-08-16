import { Element } from "react-scroll";
import { FaEnvelope, FaFacebook, FaGithub, FaPhone } from "react-icons/fa";
import ReactLogo from "../assets/ReactLogo.png";
import TailwindCSSLogo from "../assets/TailwindCSSLogo.svg";

export default function Footer() {
  return (
    <Element name="Footer">
      <footer className=" bg-[#0b0f14] text-slate-400 p-5 border-t border-white/10">
        <div className="grid grid-cols-3 gap-5 mx-7">
          <div className=" flex justify-center items-center gap-8">
            <img src={ReactLogo} className=" w-10 h-10" />
            <img src={TailwindCSSLogo} className=" w-10 h-10" />
          </div>
          <div>
            <h1 className=" text-2xl mb-3">ติดต่อฉัน</h1>
            <div className="flex gap-5">
              <a href="https://web.facebook.com/NeonzeroAi" className=" hover:text-[#00e6ff] ">
                <FaFacebook size={30} />
              </a>
              <a href="https://github.com/GGameover-AI" className=" hover:text-[#00e6ff] ">
                <FaGithub size={30} />
              </a>
            </div>
          </div>
          <div>
            <h1 className=" text-2xl mb-3">อีเมลและเบอร์โทรศัพท์</h1>
            <div>
              <p className="mb-2 flex gap-3 items-center">
                <FaEnvelope size={24} /> xverxai236@gmail.com
              </p>
              <p className="mb-2 flex gap-3 items-center">
                <FaPhone size={24} /> +66952799702
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Element>
  );
}
