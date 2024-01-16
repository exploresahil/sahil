import Image from "next/image";
import Link from "next/link";
import "./style.scss";

interface project {
  image: string;
  title: string;
  desc: string;
  link: string;
  key: number;
  target?: string;
}

const EachProject = ({ image, title, desc, link, key, target }: project) => {
  return (
    <div key={key} className="card">
      <div className="img-container">
        <Image src={image} alt={title} width={1000} height={1000} />
        <div className="img-bg" />
      </div>

      <div className="text-container">
        <h3>{title}</h3>
        <p>{desc}</p>
        <Link href={link} target={target}>
          view
        </Link>
      </div>
    </div>
  );
};

export default EachProject;
