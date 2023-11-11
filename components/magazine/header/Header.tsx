import Link from "next/link";
import "./header.scss";

const Header = () => {
  return (
    <section id="magazineHeader">
      <Link href="/magazine">
        Palate Portraits <span>by sahil satpute</span>
      </Link>
      <p>The Magazine</p>
    </section>
  );
};

export default Header;
