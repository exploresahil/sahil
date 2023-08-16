import Link from "next/link";
import PortfolioSelect from "./default/PortfolioSelect";
import { TiArrowBack } from "react-icons/ti";

const PortfolioNav = () => {
  return (
    <div className="portfolio-nav-container">
      <Link href="/" className="left">
        <TiArrowBack size={20} /> <h3>Sahil Satpute</h3>
      </Link>
      <PortfolioSelect />
    </div>
  );
};

export default PortfolioNav;
