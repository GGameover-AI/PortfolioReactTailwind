import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <div className="flex justify-between bg-blue-950 text-white px-10 py-3 shadow-blue-950/80 shadow-lg sticky">
      <div className=" font-bold text-2xl">Portfolio</div>
      <ul className=" flex justify-center text-base items-center gap-5 ">
        <li>
          <Link
            to="Hero"
            smooth={true}
            duration={5000}
            className=" cursor-pointer"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="About"
            smooth={true}
            duration={5000}
            className=" cursor-pointer"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="Projects"
            smooth={true}
            duration={5000}
            className=" cursor-pointer"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="Contact"
            smooth={true}
            duration={5000}
            className=" cursor-pointer"
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
}
