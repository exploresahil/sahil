import Link from "next/link";
import "./projects.scss";
import { motion, useAnimation } from "framer-motion";

const projectsList = [
  {
    number: "01",
    title: "Website Sections",
    description: "DESIGN | ANIMATION | NEXT | 2023",
    href: "/projects/hover-image-slide-effect",
  },
  {
    number: "02",
    title: "Magazine",
    description: "DESIGN | ABSTRACT | NEXT | 2023",
    href: "/magazine",
  },
  {
    number: "03",
    title: "Design",
    description: "CODE functionality | NEXT | 2023",
    href: "/crud",
  },
  {
    number: "04",
    title: "E-Commerce",
    description: "CODE | ANIMATION | NEXT | 2023",
    href: "https://thekapdaproject.vercel.app/",
  },
  {
    number: "05",
    title: "Api",
    description: "CODE | ANIMATION | NEXT | 2023",
    href: "/api-projects",
  },
];

const Projects = () => {
  const animationControls = projectsList.map(() => useAnimation());

  const handleLinkHover = (index: any) => {
    animationControls[index].start({ height: "100%" });
  };

  const handleLinkLeave = (index: any) => {
    animationControls[index].start({ height: "0%" });
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
