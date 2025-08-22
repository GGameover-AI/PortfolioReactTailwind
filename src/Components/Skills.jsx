import { Element } from "react-scroll";
import javaScriptIcon from "../assets/SkillIcons/JavaScript.svg";
import cSharpIcon from "../assets/SkillIcons/Csharp.svg";
import reactIcon from "../assets/SkillIcons/React.svg";
import booststrapIcon from "../assets/SkillIcons/Bootstrap.svg";
import tailwindcssIcon from "../assets/SkillIcons/Tailwind CSS.svg";
import nodejsIcon from "../assets/SkillIcons/NodeJS.svg"
import expressIcon from "../assets/SkillIcons/Express.svg"
import mongodbIcon from "../assets/SkillIcons/MongoDB.svg";
import vscodeIcon from "../assets/SkillIcons/VSCode.svg";
import githubIcon from "../assets/SkillIcons/GitHub.svg";
import unityIcon from "../assets/SkillIcons/Unity.svg";
import forkIcon from "../assets/SkillIcons/Fork.png";

export default function Skills() {
  return (
    <Element name="Skills">
      <section className="flex flex-col justify-center items-center bg-gray-900 text-white px-20 py-20">
        <h1 className="text-5xl font-bold text-cyan-500 mb-8">Skills</h1>
        <div className="grid grid-cols-2 bg-purple-500/10 shadow-lg shadow-pink-400/30 hover:shadow-xl hover:shadow-pink-400/50 rounded-2xl px-6 py-4 transition">
          <div className=" col-span-2">
            {/* Languages */}
            <h2 className="font-semibold mb-5">Languages</h2>
            <div>
              <div className="flex text-lg gap-4 mb-4">
                <img src={javaScriptIcon} className=" w-8 h-8" />
                <p>Javascript</p>
              </div>
              <div className="flex text-lg gap-4 mb-4">
                <img src={cSharpIcon} className=" w-8 h-8" />
                <p>C#</p>
              </div>
            </div>
          </div>

          {/* Fontend */}
          <div>
            {/* Frameworks */}
            <h2 className="font-semibold mb-5">Frameworks</h2>
            <div>
              <div className="flex text-lg gap-4 mb-4">
                <img src={reactIcon} className=" w-8 h-8" />
                <p>React</p>
              </div>
            </div>
          </div>

          <div>
            {/* CSS Frameworks */}
            <h2 className="font-semibold mb-5">CSS Frameworks</h2>
            <div>
              <div className="flex text-lg gap-4 mb-4">
                <img src={booststrapIcon} className=" w-8 h-8" />
                <p>Bootstrap</p>
              </div>
              <div className="flex text-lg gap-4 mb-4">
                <img src={tailwindcssIcon} className=" w-8 h-8" />
                <p>Tailwind CSS</p>
              </div>
            </div>
          </div>

          {/* Backend */}
          <div>
            <h2 className="font-semibold mb-5">Backend</h2>
            <div>
              <div className="flex text-lg gap-4 mb-4">
                <img src={nodejsIcon} className=" w-8 h-8" />
                <p>NodeJS</p>
              </div>
            </div>
            <div>
              <div className="flex text-lg gap-4 mb-4">
                <img src={expressIcon} className=" w-8 h-8" />
                <p>Express</p>
              </div>
            </div>
          </div>
          <div>
            {/* Databases */}
            <h2 className="font-semibold mb-5">Databases</h2>
            <div>
              <div className="flex text-lg gap-4 mb-4">
                <img src={mongodbIcon} className=" w-8 h-8" />
                <p>MongoDB</p>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            {/* Tools & Others */}
            <h2 className="font-semibold mb-5">Tools & Others</h2>
            <div className="flex gap-8">
              <div className="flex text-lg gap-4 mb-4">
                <img src={vscodeIcon} className=" w-8 h-8" />
                <p>VS Code</p>
              </div>
              <div className="flex text-lg gap-4 mb-4">
                <img src={githubIcon} className=" w-8 h-8" />
                <p>Github</p>
              </div>
              <div className="flex text-lg gap-4 mb-4">
                <img src={forkIcon} className=" w-8 h-8" />
                <p>Fork</p>
              </div>
              <div className="flex text-lg gap-4 mb-4">
                <img src={unityIcon} className=" w-8 h-8" />
                <p>Unity</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Element>
  );
}
