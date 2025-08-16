import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="flex justify-between bg-black/80 backdrop-blur-lg border-b border-gray-800 text-white px-10 py-3 sticky">
      <div className=" font-bold text-2xl">
        <Link to="Hero" smooth={true} duration={5000} className=" cursor-pointer hover:text-cyan-300 transition">
          Portfolio
        </Link>
      </div>
      <ul className=" flex justify-center items-center text-base">
        <li>
          <Link
            to="Hero"
            smooth={true}
            duration={5000}
            className=" cursor-pointer p-3 me-5 hover:bg-cyan-300 transition"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="About"
            smooth={true}
            duration={5000}
            className=" cursor-pointer p-3 me-5 hover:bg-cyan-300 transition"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="Projects"
            smooth={true}
            duration={5000}
            className=" cursor-pointer p-3 me-5 hover:bg-cyan-300 transition"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="Contact"
            smooth={true}
            duration={5000}
            className=" cursor-pointer p-3 hover:bg-cyan-300 transition"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
