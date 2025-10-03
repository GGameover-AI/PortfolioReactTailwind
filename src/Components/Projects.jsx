import { Element } from "react-scroll";
import SpaceShooter from "./Projects/SpaceShooter";
import Aquamarine from "./Projects/Aquamarine";
import PortfolioWeb from "./Projects/PortfolioWeb";
import MiniEcommerce from "./Projects/miniEcommerce";


export default function Projects() {
  return (
    <Element name="Projects">
      <section className=" bg-gray-900 text-white px-10 md:px-50 py-20">
        <h1 className="text-center text-2xl md:text-5xl font-bold text-cyan-500 mb-10">
          Projects
        </h1>

        <section className=" grid grid-cols-1 md:grid-cols-3 text-md md:text-lg gap-8">
          {/* Project 1 */}
          <SpaceShooter/>
          {/* Project 2 */}
          <Aquamarine/>
          {/* Project 3 */}
          <PortfolioWeb/>
          {/* Project 4 */}
          <MiniEcommerce/>
        </section>
      </section>
    </Element>
  );
}
