import "./footer.scss";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub, BsBehance } from "react-icons/bs";

const Footer = ({ onMouseEnter, onMouseLeave }: any) => {
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
    <footer>
      <p>© 2023 - All Rights Reserved</p>
      <p>
        Designed and Developed by{" "}
        <Link
          href="/"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Sahil Satpute
        </Link>
      </p>
      <div className="social">
        <Link
          href="https://www.linkedin.com/in/exploresahil/"
          target="_blank"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <FaLinkedinIn />
        </Link>
        <Link
          href="https://github.com/exploresahil"
          target="_blank"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <BsGithub />
        </Link>
        <Link
          href="https://www.behance.net/exploresahil"
          target="_blank"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <BsBehance />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
