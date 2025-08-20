import { Element } from "react-scroll";
import SpaceShooter from "./Projects/SpaceShooter";
import Aquamarine from "./Projects/Aquamarine";
import PortfolioWeb from "./Projects/PortfolioWeb";
import SimpleTodolist from "./Projects/SimpleTodolist";


export default function Projects() {
  return (
    <Element name="Projects">
      <section className=" bg-gray-900 text-white px-50 py-20">
        <h1 className="text-center text-5xl font-bold text-cyan-500 mb-10">
          Projects
        </h1>

        <section className="grid grid-cols-3 text-lg gap-8">
          {/* Project 1 */}
          <SpaceShooter/>
          {/* Project 2 */}
          <Aquamarine/>
          {/* Project 3 */}
          <SimpleTodolist/>
          {/* Project 4 */}
          <PortfolioWeb/>
        </section>
      </section>
    </Element>
  );
}
