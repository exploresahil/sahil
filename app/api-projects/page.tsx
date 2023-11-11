import Image from "next/image";
import "./apiProjects.scss";
import Link from "next/link";

const apiProjects = [
  {
    srno: "01",
    title: "WikiWord | Dictionary App",
    desc: "Introducing “WikiWord”, your pocket dictionary powered by the extensive knowledge base of Wikipedia. With a simple and user-friendly interface, “WikiWord” allows you to search for any word or phrase and instantly provides you with a comprehensive definition, context, and related information sourced directly from Wikipedia. ",
    link: "/api-projects/wikiword",
    image:
      "https://images.unsplash.com/photo-1451226428352-cf66bf8a0317?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const video =
  "https://assets.mixkit.co/videos/preview/mixkit-texture-of-colored-ink-flowing-in-a-thick-liquid-44821-large.mp4";

const page = () => {
  return (
    <section id="apiProjects">
      <div className="card-conatiner">
        {apiProjects.map((project, i) => (
          <div key={i} className="card">
            <div className="img-container">
              <Image
                src={project.image}
                alt={project.title}
                width={1000}
                height={1000}
              />
              <div className="img-bg" />
            </div>

            <div className="text-container">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <Link href={project.link}>view</Link>
            </div>
          </div>
        ))}
      </div>
      <div className="video-player">
        <video autoPlay muted loop>
          <source src={video} />
        </video>
        <div className="bg" />
      </div>
    </section>
  );
};

export default page;
