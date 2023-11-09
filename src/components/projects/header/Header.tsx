"use client";

import { TiArrowBack } from "react-icons/ti";
import "./header.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Nav from "./nav/Nav";

const Header = () => {
  const pathname = usePathname();

  // Define an array of pathnames where you want to render the nav element
  const allowedPathnames = [
    "/projects/pixel-cursor-move",
    "/projects/hover-image-slide-effect",
    "/projects/dropdown-menu",
    "/projects/slide-menu",
    "/projects/popup-menu",
  ];

  // Check if the current pathname is in the allowed pathnames
  const isAllowedPathname = allowedPathnames.includes(pathname);

  return (
    <header className="projects-header">
      {isAllowedPathname ? (
        <Link href="/projects">
          <TiArrowBack size={20} />
          <h2>projects</h2>
        </Link>
      ) : (
        <Link href="/">
          <TiArrowBack size={20} />
          <h2>sahil satpute</h2>
        </Link>
      )}
      {isAllowedPathname && <Nav />}
    </header>
  );
};

export default Header;
