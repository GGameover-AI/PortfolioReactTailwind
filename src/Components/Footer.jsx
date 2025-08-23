import { Element } from "react-scroll";
import { FaEnvelope, FaFacebook, FaGithub, FaPhone } from "react-icons/fa";
import ReactLogo from "../assets/ReactLogo.png";
import TailwindCSSLogo from "../assets/TailwindCSSLogo.svg";

export default function Footer() {
  return (
    <Element name="Footer">
      <footer className=" bg-[#0b0f14] text-slate-400 p-5 border-t border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-5 px-7">
          <div className=" flex justify-center items-center gap-8">
            <img src={ReactLogo} className=" size-8 lg:size-12" />
            <img src={TailwindCSSLogo} className=" size-8 lg:size-12" />
          </div>
          <div className="flex flex-col text-center">
            <h1 className="text-base lg:text-2xl font-bold mb-3 mt-5 md:mt-0">ติดต่อฉัน</h1>
            <div className="flex justify-center gap-5">
              <a href="https://web.facebook.com/NeonzeroAi" className=" hover:text-[#00e6ff] ">
                <FaFacebook className=" lg:size-8"/>
              </a>
              <a href="https://github.com/GGameover-AI" className=" hover:text-[#00e6ff] ">
                <FaGithub className=" lg:size-8"/>
              </a>
            </div>
          </div>
          <div>
            <h1 className="flex flex-col items-center text-base lg:text-2xl font-bold mb-3 mt-5 md:mt-0">อีเมลและเบอร์โทรศัพท์</h1>
            <div>
              <p className="mb-2 flex flex-col gap-3 items-center md:items-start text-sm lg:text-lg">
                <FaEnvelope className=" lg:size-6 sm:block hidden" /> xverxai236@gmail.com
              </p>
              <p className="mb-2 flex flex-col gap-3 items-center md:items-start text-sm lg:text-lg" >
                <FaPhone className=" lg:size-6 sm:block hidden"/> +66952799702
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Element>
  );
}
