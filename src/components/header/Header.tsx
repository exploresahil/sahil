import Link from "next/link";
import "./header.scss";
import { FaAsterisk, FaCode } from "react-icons/fa";

function Header() {
  return (
    <header>
      <FaAsterisk />
      <Link href="/">
        <h2>sahil satpute</h2>
      </Link>
      <FaCode />
    </header>
  );
}

export default Header;
