import EachProject from "@/components/projects/eachProjects/EachProject";
import "./style.scss";

const data = [
  {
    title: "The Kapda Project | Next Js 13.4",
    image: "/assets/images/thekapda.png",
    desc: " Crafted with Next.js for a smooth browsing experience, managed by Sanity.js for dynamic content, and streamlined by Redux for efficient state management. Backed by Supabase for robust database functionality and integrated with PhonePe for secure payments.",
    link: "https://thekapdaproject.vercel.app/",
  },
  {
    title: "Halbe | Wordpress",
    image: "/assets/images/halbe.png",
    desc: "Introducing Halbe: Your trusted partner in Accounting, Finance, and Investments. Built on the reliable WordPress platform, Halbe offers expert solutions tailored to your financial needs. Experience seamless service delivery with a focus on precision and growth. Choose Halbe for a secure financial future.",
    link: "http://13.232.41.249/",
  },
];

const video =
  "https://assets.mixkit.co/videos/preview/mixkit-texture-of-colored-ink-flowing-in-a-thick-liquid-44821-large.mp4";

const page = () => {
  return (
    <section id="websites-section">
      <div className="projects">
        {data.map((item, index) => (
          <EachProject
            key={index}
            title={item.title}
            image={item.image}
            link={item.link}
            desc={item.desc}
            target="_blank"
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
