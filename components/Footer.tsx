"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Link as ScrollTo } from "react-scroll";

const Footer = () => {
  const router = useRouter();
  return (
    <footer>
      <ScrollTo to="header" spy={true} smooth={true}>
        <h4 onClick={() => router.push("/")}>sahil satpute</h4>
      </ScrollTo>
      <p>
        <Link href="mailto:explore.sahil@outlook.com">
          explore.sahil@outlook.com
        </Link>
        <Link href="tel:+918999091346">+91 899 909 1346</Link>
      </p>
    </footer>
  );
};

export default Footer;
