"use client";

import "./header.scss";
import Link from "next/link";
import { Link as ScrollTo } from "react-scroll";

const navLinks = [
  {
    title: "about",
    href: "about",
  },
  {
    title: "projects",
    href: "projects",
  },
  {
    title: "contact",
    href: "contact",
  },
];

const Header = ({ onMouseEnter, onMouseLeave }: any) => {
  // Logic to hide cursor when entering the Hero component
  const handleMouseEnter = () => {
    onMouseEnter();
    // You can add custom logic here if needed
  };

  // Logic to show cursor when leaving the Hero component
  const handleMouseLeave = () => {
    onMouseLeave();
    // You can add custom logic here if needed
  };

  return (
    <header id="header">
      <Link
        className="logo"
        href="/"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        sahil satpute
      </Link>
      <nav>
        {navLinks.map((nav, index) => (
          <div
            key={index}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <ScrollTo to={nav.href} spy={true} smooth={true}>
              {nav.title}
            </ScrollTo>
          </div>
        ))}
      </nav>
    </header>
  );
};

export default Header;
