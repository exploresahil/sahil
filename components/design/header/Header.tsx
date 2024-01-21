"use client";
import "./style.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  // Define an array of pathnames where you want to render the nav element
  const allowedPathnames = ["/design/threebeans"];

  // Check if the current pathname is in the allowed pathnames
  const isAllowedPathname = allowedPathnames.includes(pathname);
  return (
    <section id="designHeader">
      {isAllowedPathname ? (
        <Link href="/design">Design</Link>
      ) : (
        <div className="links">
          <Link href="/projects" className="projects-link">
            projects
          </Link>

          <Link href="/design">Design</Link>
        </div>
      )}

      <p>by Sahil Satpute</p>
    </section>
  );
};

export default Header;
