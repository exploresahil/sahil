import "./nav.scss";
import { useRouter } from "next/navigation";

const NavItems = [
  {
    title: "Hover Image Slide Animation",
    href: "/projects/hover-image-slide-effect",
  },
  {
    title: "projects",
    href: "/projects",
  },
  {
    title: "Hover Image Slide Animation",
    href: "/projects/hover-image-slide-effect",
  },
  {
    title: "Hover Image Slide Animation",
    href: "/projects/hover-image-slide-effect",
  },
  {
    title: "Hover Image Slide Animation",
    href: "/projects/hover-image-slide-effect",
  },
  {
    title: "Hover Image Slide Animation",
    href: "/projects/hover-image-slide-effect",
  },
];

const Nav = () => {
  const router = useRouter();

  const handleOptionChange = (event: any) => {
    const selectedOption = event.target.value;
    const selectedNavItem = NavItems.find(
      (nav) => nav.title === selectedOption
    );

    if (selectedNavItem) {
      router.push(selectedNavItem.href);
    }
  };
  return (
    <select onChange={handleOptionChange}>
      {NavItems.map((nav, index) => (
        <option key={index} value={nav.title}>
          {nav.title}
        </option>
      ))}
    </select>
  );
};

export default Nav;
