import Link from "next/link";
import Img from "./default/Img";

import sahil from "@/public/images/logo/sahil.png";

const navItems = [
  {
    title: "about",
    href: "#about",
  },
  {
    title: "portfolio",
    href: "#portfolio",
  },
  {
    title: "contact",
    href: "#contact",
  },
];

const Header = () => {
  return (
    <header>
      <Link className="logo" href="/">
        <Img src={sahil} alt="Profile image of Sahil Satpute" fit="cover" />
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
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
