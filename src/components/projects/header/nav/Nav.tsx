import "./nav.scss";
import { useRouter, usePathname } from "next/navigation";

const NavItems = [
  {
    title: "Hover Image Slide Animation",
    href: "/projects/hover-image-slide-effect",
  },
  {
    title: "Pixel Cursor Move",
    href: "/projects/pixel-cursor-move",
  },
  {
    title: "Dropdown Menu",
    href: "/projects/dropdown-menu",
  },
  {
    title: "Slide Menu",
    href: "/projects/slide-menu",
  },
  {
    title: "Pop-up Menu",
    href: "/projects/popup-menu",
  },
  {
    title: "Hover Image Slide Animation",
    href: "/projects",
  },
];

const Nav = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleOptionChange = (event: any) => {
    const selectedOption = event.target.value;
    const selectedNavItem = NavItems.find(
      (nav) => nav.title === selectedOption
    );

    if (selectedNavItem) {
      // Use router.push to navigate and set the selected value in the select element
      router.push(selectedNavItem.href, undefined);
    }
  };

  return (
    <select onChange={handleOptionChange} value={pathname}>
      {NavItems.map((nav, index) => (
        <option key={index} value={nav.href}>
          {nav.title}
        </option>
      ))}
    </select>
  );
};

export default Nav;
