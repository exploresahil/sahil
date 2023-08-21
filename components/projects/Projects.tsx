import Link from "next/link";
import "./projects.scss";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import star from "@/public/assets/svg/star.svg";

const projectsList = [
  {
    number: "01",
    title: "Website Sections",
    description: "DESIGN | ANIMATION | NEXT | 2023",
    href: "/website-sections",
  },
  {
    number: "02",
    title: "CURD",
    description: "CODE functionality | NEXT | 2023",
    href: "/curd",
  },
  {
    number: "03",
    title: "Magazine",
    description: "DESIGN | ABSTRACT | NEXT | 2023",
    href: "/magazine",
  },
  {
    number: "04",
    title: "Website Section Layouts",
    description: "DESIGN | GUIDE | NEXT | 2023",
    href: "/website-section-layouts",
  },
];

const Projects = ({ onMouseEnter, onMouseLeave }: any) => {
  const animationControls = projectsList.map(() => useAnimation());

  const handleLinkHover = (index: any) => {
    // Function to handle link hover
    animationControls[index].start({ height: "100%" }); // Expand the background height for the specific link
    onMouseEnter();
  };

  const handleLinkLeave = (index: any) => {
    // Function to handle link leave
    animationControls[index].start({ height: "0%" }); // Shrink the background height for the specific link
    onMouseLeave();
  };

  return (
    <section id="projects">
      <h4>Projects</h4>
      <div className="projects-list-container">
        {projectsList.map((item, index) => (
          <Link
            href={item.href}
            className="project-container"
            key={index}
            onMouseEnter={() => handleLinkHover(index)}
            onMouseLeave={() => handleLinkLeave(index)}
          >
            <div className="circle">
              <p>{item.number}</p>
            </div>
            <div className="title-container">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <motion.div
              className="bg"
              initial={{ height: 0 }}
              animate={animationControls[index]}
              transition={{ duration: 0.2, type: "tween", ease: "easeInOut" }}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;
