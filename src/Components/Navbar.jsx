import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="flex justify-between bg-blue-950 text-white px-10 py-3 shadow-blue-950/80 shadow-none sticky">
      <div className=" font-bold text-2xl">Portfolio</div>
      <ul className=" flex justify-center text-base items-center">
        <li>
          <Link
            to="Hero"
            smooth={true}
            duration={5000}
            className=" cursor-pointer p-3 me-5 hover:bg-blue-500"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="About"
            smooth={true}
            duration={5000}
            className=" cursor-pointer p-3 me-5 hover:bg-blue-500"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="Projects"
            smooth={true}
            duration={5000}
            className=" cursor-pointer p-3 me-5 hover:bg-blue-500"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="Contact"
            smooth={true}
            duration={5000}
            className=" cursor-pointer p-3 hover:bg-blue-500"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
