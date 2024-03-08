import EachProject from "@/components/projects/eachProjects/EachProject";
import "./style.scss";
import Image from "next/image";

const data = [
  {
    title: "The Kapda Project | Next Js 13.4",
    image: "/assets/images/thekapda.png",
    desc: " Crafted with Next.js for a smooth browsing experience, managed by Sanity.js for dynamic content, and streamlined by Redux for efficient state management. Backed by Supabase for robust database functionality and integrated with PhonePe for secure payments.",
    link: "https://thekapdaproject.vercel.app/",
  },
  {
    title: "Tripusers | Next Js 14.1",
    image: "/assets/images/tripusers.png",
    desc: "Discover refined luxury with Tripusers.com. Tailoring stress-free adventures for individuals and corporations, our expert team crafts personalized international and domestic packages. Welcome to travel elevated, where every moment is a seamless blend of sophistication and adventure.",
    link: "https://www.tripusers.com",
  },
  {
    title: "#StyleScape | Next Js 13.4",
    image: "/assets/images/stylescape.png",
    desc: "Presenting #stylescape: A Next.js-powered tool that streamlines the creation of detailed brand reports, focusing on design elements. It’s the go-to resource for designers to align a brand’s design direction with its core values and vision, ensuring a consistent and impactful brand identity.",
    link: "https://stylescape.vercel.app/",
  },
];

const bg =
  "https://images.unsplash.com/photo-1636955779321-819753cd1741?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

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

export default page;
