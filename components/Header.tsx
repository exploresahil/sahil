"use client";

import Link from "next/link";
import { Link as ScrollTo } from "react-scroll";

import Img from "./default/Img";
import sahil from "@/public/images/logo/sahil.png";
import { usePathname } from "next/navigation";

const navItems = [
  {
    title: "about",
    href: "about",
  },
  {
    title: "portfolio",
    href: "portfolio",
  },
  {
    title: "contact",
    href: "contact",
  },
];

const Header = () => {
  const pathname = usePathname();
  const isPortfolioPage = pathname.startsWith("/portfolio");

  return (
    <>
      {!isPortfolioPage && (
        <header id="header">
          <Link className="logo" href="/">
            <Img src={sahil} alt="Profile image of Sahil Satpute" />
            <h2>sahil satpute</h2>
          </Link>
          <div className="menu-container">
            <nav className="menu">
              <ul>
                {navItems.map((item, index) => (
                  <li key={index}>
                    <div className="dot-container">
                      <div className="dot" />
                    </div>
                    {item.href === "contact" ? (
                      <ScrollTo
                        to={item.href}
                        spy={true}
                        smooth={true}
                        offset={100}
                      >
                        {item.title}
                      </ScrollTo>
                    ) : (
                      <ScrollTo to={item.href} spy={true} smooth={true}>
                        {item.title}
                      </ScrollTo>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
