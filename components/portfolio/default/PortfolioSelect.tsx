"use client";
import { usePathname, useRouter } from "next/navigation";

const PortfolioSelect = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handlePageChange = (event: any) => {
    const selectedPage = event.target.value;
    router.push(selectedPage);
  };

  return (
    <select id="pageSelect" value={pathname} onChange={handlePageChange}>
      <option value="/portfolio/image-slide-hover-animation">
        Image Slide Hover Animation
      </option>
      <option value="/portfolio/pixel-cursor">Pixel Cursor</option>
      <option value="/portfolio">About</option>
      <option value="/portfolio">Contact</option>
    </select>
  );
};

export default PortfolioSelect;
