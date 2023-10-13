import "./footer.scss";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub, BsBehance } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <p>© 2023 - All Rights Reserved</p>
      <p>
        Designed and Developed by <Link href="/">Sahil Satpute</Link>
      </p>
      <div className="social">
        <Link href="https://www.linkedin.com/in/exploresahil/" target="_blank">
          <FaLinkedinIn />
        </Link>
        <Link href="https://github.com/exploresahil" target="_blank">
          <BsGithub />
        </Link>
        <Link href="https://www.behance.net/exploresahil" target="_blank">
          <BsBehance />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
