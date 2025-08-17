import { Element } from "react-scroll";
import javaScriptIcon from "../assets/Skill Icons/JavaScript.svg";
import cSharpIcon from "../assets/Skill Icons/Csharp.svg";
import reactIcon from "../assets/Skill Icons/React.svg";
import booststrapIcon from "../assets/Skill Icons/Bootstrap.svg";
import tailwindcssIcon from "../assets/Skill Icons/Tailwind CSS.svg";
import nodejsIcon from "../assets/Skill Icons/NodeJS.svg"
import expressIcon from "../assets/Skill Icons/Express.svg"
import mongodbIcon from "../assets/Skill Icons/MongoDB.svg";
import vscodeIcon from "../assets/Skill Icons/VSCode.svg";
import githubIcon from "../assets/Skill Icons/GitHub.svg";
import unityIcon from "../assets/Skill Icons/Unity.svg";
import googledriveIcon from "../assets/GoogleDrive.png";
import SpaceShooter from "./Projects/SpaceShooter";


export default function Projects() {
  return (
    <Element name="Projects">
      <section className=" bg-gray-900 text-white px-20 py-20">
        <h1 className="text-center text-5xl font-bold text-cyan-500 mb-10">
          Projects
        </h1>

        <section className="grid grid-cols-3 text-lg gap-8">
          {/* Project 1 */}
          <SpaceShooter/>
          {/* Project 2 */}

          {/* Project 3 */}

        </section>
      </section>
    </Element>
  );
}
