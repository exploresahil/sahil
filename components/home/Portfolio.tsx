import Link from "next/link";

const cardItems = [
  {
    number: "01",
    title: "Image Slide Hover Animation",
    href: "/portfolio/image-slide-hover-animation",
  },
  {
    number: "02",
    title: "Pixel Cursor",
    href: "/portfolio/pixel-cursor",
  },
  {
    number: "03",
    title: "Three",
    href: "/",
  },
  {
    number: "04",
    title: "Four",
    href: "/",
  },
  {
    number: "05",
    title: "Five",
    href: "/",
  },
  {
    number: "06",
    title: "Six",
    href: "/",
  },
];
const Portfolio = () => {
  return (
    <div className="portfolio-container" id="portfolio">
      <div className="portfolio-title">
        <h3>Portfolio</h3>
        <Link href="/portfolio/image-slide-hover-animation">View All</Link>
      </div>
      <div className="grid-container">
        {cardItems.map((item, index) => (
          <Link key={index} href={item.href} className="card">
            <p className="number">{item.number}</p>
            <p className="title">{item.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
