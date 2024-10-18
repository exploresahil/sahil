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
    <section className="projects-header">
      {isAllowedPathname ? (
        <>
          <div className="left">
            <Link href="/projects">
              <TiArrowBack size={20} />
              <h2>projects</h2>
            </Link>

            <Link
              href="https://dev.sahilsatpute.in/projects/website-sections/parallax-scroll"
              target="_black"
            >
              <h2 className="dev">| dev projects</h2>
            </Link>
          </div>
        </>
      ) : (
        <Link href="/">
          <TiArrowBack size={20} />
          <h2>sahil satpute</h2>
        </Link>
      )}
      {isAllowedPathname && <Nav />}
    </section>
  );
};

export default Header;
