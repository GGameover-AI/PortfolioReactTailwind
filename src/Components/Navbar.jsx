import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="flex justify-between bg-black/60 border-b backdrop-blur-md border-gray-800 text-white px-10 py-3 fixed top-0 left-0 w-full z-50">
      <div className=" font-bold text-2xl">
        <Link to="Hero" smooth={true} className=" cursor-pointer hover:text-cyan-300 transition">
          Portfolio
        </Link>
      </div>
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
    </div>
  );
}
