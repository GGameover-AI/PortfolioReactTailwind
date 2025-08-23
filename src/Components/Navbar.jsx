import { useState } from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <div className="flex sm:flex-row justify-between bg-black/60 border-b backdrop-blur-md border-gray-800 text-white px-10 py-3 fixed top-0 left-0 w-full z-50">
      <div className=" font-bold text-2xl">
        <Link
          to="Hero"
          smooth={true}
          className=" cursor-pointer hover:text-cyan-300 transition"
        >
          Portfolio
        </Link>
      </div>

      <button
        className="sm:hidden text-2xl bg-gray-950/80 px-2 pb-1"
        onClick={() => setIsToggle(!isToggle)}
      >
        ☰
      </button>

      {/* Desktop */}
      <ul className="hidden sm:flex justify-center items-center text-base">
        <li>
          <Link
            to="Hero"
            smooth={true}
            className=" cursor-pointer p-3 me-5 hover:bg-cyan-300 transition"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="About"
            smooth={true}
            className=" cursor-pointer p-3 me-5 hover:bg-cyan-300 transition"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="Projects"
            smooth={true}
            className=" cursor-pointer p-3 me-5 hover:bg-cyan-300 transition"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="Footer"
            smooth={true}
            className=" cursor-pointer p-3 hover:bg-cyan-300 transition"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile */}

      <ul
        className={`sm:hidden absolute top-full left-0 w-full bg-black/80 backdrop-blur-3xl text-center py-4 
        transition-all duration-300 ease-out transform
        ${
          isToggle ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1 "
        } pointer-events-none z-49`}
      >
        <li>
          <Link to="Hero" smooth={true} className="block p-2">
            Home
          </Link>
        </li>
        <li>
          <Link to="About" smooth={true} className="block p-2">
            About
          </Link>
        </li>
        <li>
          <Link to="Projects" smooth={true} className="block p-2">
            Projects
          </Link>
        </li>
        <li>
          <Link to="Footer" smooth={true} className="block p-2">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
