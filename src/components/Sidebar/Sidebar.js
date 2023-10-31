import React, { useState } from "react";
import Link from "../Navigator/Link";
import Logo from "../../assets/Logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";

function Sidebar() {
  const links = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Menu",
      path: "/menu",
    },
    {
      label: "Reservations",
      path: "/reservations",
    },
    {
      label: "Order online",
      path: "/order_online",
    },
    {
      label: "Login",
      path: "/login",
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const renderLinks = links.map((link) => {
    const classes =
      link.label === "Order online"
        ? "whitespace-nowrap mt-2"
        : "mt-2";
    return (
      <Link
        key={link.label}
        to={link.path}
        className={`${classes} block px-3 py-2 rounded-md text-base font-medium`}
        activeLink="font-bold border-b-2 pl-2"
      >
        {link.label}
      </Link>
    );
  });

  return (
    <nav className="lg:flex lg:items-center lg:justify-between">
      <div className="flex items-center justify-between lg:justify-start lg:space-x-10">
        <img src={Logo} alt="Logo" className="mt-2" />
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl lg:hidden"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <div
        className={`lg:flex lg:space-x-10 ${
          isMenuOpen ? "block" : "hidden"
        } lg:block`}
      >
        {renderLinks}
      </div>
    </nav>
  );
}

export default Sidebar;
