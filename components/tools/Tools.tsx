import Image from "next/image";
import "./style.scss";

const abstractOne =
  "https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80";

const abstractTwo =
  "https://images.unsplash.com/photo-1605106702842-01a887a31122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60";

const bg =
  "https://images.unsplash.com/photo-1636955779321-819753cd1741?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const data = [
  {
    title: "• Development",
    list: [
      "html",
      "css",
      "scss",
      "js",
      "react",
      "next",
      "GSAP",
      "Framer Motion",
      "sanity",
      "supabase",
    ],
  },
  {
    title: "• Creative",
    list: [
      "adobe xd",
      "illustrator",
      "lightroom",
      "photoshop",
      "primere pro",
      "after effects",
      "dimension",
      "stable diffusion",
    ],
  },
];

const Skills = () => {
  return (
    <section id="tools">
      <h3>Tools</h3>
      <div className="tools-container">
        {data.map((item, index) => (
          <div className="development-creative-container" key={index}>
            <div className="icon-container">
              <Image
                src={index === 0 ? abstractOne : abstractTwo}
                alt="abstract"
                fill
                sizes="100"
              />
            </div>
            <div className="items-container">
              <h4>{item.title}</h4>
              <ul>
                {item.list.map((tool, i) => (
                  <li key={i}>{tool}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-container">
        <Image
          src={bg}
          alt="background"
          fill
          sizes="(max-width: 768px) 600px, (max-width: 1200px) 1000px, 2000px"
        />
        <div className="bg" />
      </div>
    </section>
  );
};

export default Skills;
