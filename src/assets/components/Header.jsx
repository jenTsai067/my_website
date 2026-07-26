import "../../App.css";
import { useState } from "react";
import { RiMenu3Fill, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", linkTo: "/" },
    { name: "Project", linkTo: "/project" },
    { name: "About Me", linkTo: "/about" },
  ];

  return (
    <div className="w-full  py-4 flex justify-between  items-center bg-white drop-shadow-lg drop-shadow-gray-400 relative z-50 px-6 lg:px-12">
      {/* Logo Section */}
      <section className="logo w-20">
        <img src="/images/Logo.png" alt="website logo" />
      </section>
      {/* Menu Icon */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-main-blue focus:outline-none z-50 p-1"
        aria-label="Toggle Menu"
      >
        {isOpen ? <RiCloseLine size={32} /> : <RiMenu3Fill size={32} />}
      </button>
      {/* Nav Section */}
      <nav className="hidden md:flex items-center gap-8 font-medium md:text-base lg:text-[18px]">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.linkTo}
            className="relative text-black hover:text-main-blue transition-colors duration-300 group py-1"
          >
            {link.name}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-main-blue transition-all duration-300 group-hover:w-full" />
          </Link>
        ))}
      </nav>
      <div
        className={`fixed inset-0 w-full h-screen bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center transition-all duration-300 md:hidden z-40 ${
          isOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center gap-8 text-xl font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.linkTo}
              onClick={() => setIsOpen(false)}
              className="relative text-white hover:text-main-blue transition-colors duration-300 group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-main-blue transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Header;
