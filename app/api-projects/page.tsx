import "./apiProjects.scss";
import EachProject from "@/components/projects/eachProjects/EachProject";

const apiProjects = [
  {
    srno: "01",
    title: "WikiWord | Dictionary App",
    desc: "Introducing “WikiWord”, your pocket dictionary powered by the extensive knowledge base of Wikipedia. With a simple and user-friendly interface, “WikiWord” allows you to search for any word or phrase and instantly provides you with a comprehensive definition, context, and related information sourced directly from Wikipedia.",
    link: "/api-projects/wikiword",
    image:
      "https://images.unsplash.com/photo-1451226428352-cf66bf8a0317?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    srno: "01",
    title: "QrCoder | QR Code App",
    desc: "QRCoder is a user-friendly and efficient application designed to generate QR codes. It leverages the powerful API provided by goqr.me, which allows for the creation of QR codes for various types of data, including text, URLs, email addresses, phone numbers, and more.",
    link: "/api-projects/qr-code",
    image:
      "https://images.unsplash.com/photo-1550482768-88b710a445fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cXJ8ZW58MHx8MHx8fDA%3D",
  },
];

const video =
  "https://assets.mixkit.co/videos/preview/mixkit-texture-of-colored-ink-flowing-in-a-thick-liquid-44821-large.mp4";

const page = () => {
  return (
    <section id="apiProjects">
      <div className="card-conatiner">
        {apiProjects.map((project, index) => (
          <EachProject
            key={index}
            title={project.title}
            image={project.image}
            link={project.link}
            desc={project.desc}
          />
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
