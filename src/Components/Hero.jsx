import { Element, Link } from "react-scroll";
import avatar from "../assets/avatar.png";

export default function Hero() {
  return (
    <Element name="Hero">
      <section className="flex justify-center items-center px-12 pt-7 pb-5 bg-gradient-to-b from-black via-gray-950 to-gray-900 ">
        <div className="text-white">
          <h1 className="text-cyan-400 text-5xl font-bold drop-shadow mb-3">
            Hello,I'm Adison
          </h1>
          <p className="mb-2">Frontend Developer | MERN Stack Enthusiast</p>
          <button className="px-6 py-2 bg-pink-500 hover:bg-pink-400  rounded-lg shadow-lg border-gray-700 text-white ">
            <Link to="Hero" smooth={true} duration={5000}>
              Projects
            </Link>
          </button>
        </div>
        <div>
          <img src={avatar} className=" mask-b-from-0% mask-b-to-98%" />
        </div>
      </section>
    </Element>
  );
}
