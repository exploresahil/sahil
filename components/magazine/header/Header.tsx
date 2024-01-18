"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./header.scss";

const Header = () => {
  const pathname = usePathname();

  // Define an array of pathnames where you want to render the nav element
  const allowedPathnames = [
    "/magazine/three-beans",
    "/magazine/collective-blends",
    "/magazine/222-backyard",
    "/magazine/dessert-bar",
  ];

  // Check if the current pathname is in the allowed pathnames
  const isAllowedPathname = allowedPathnames.includes(pathname);

  return (
    <section id="magazineHeader">
      {isAllowedPathname ? (
        <Link href="/magazine">
          Palate Portraits <span>by sahil satpute</span>
        </Link>
      ) : (
        <div className="links">
          <Link href="/projects" className="projects-link">
            projects
          </Link>

          <Link href="/magazine">
            Palate Portraits <span>by sahil satpute</span>
          </Link>
        </div>
      )}

      <p>The Magazine</p>
    </section>
  );
};

export default Header;
