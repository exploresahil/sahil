import Image from "next/image";
import "./imageslide.scss";

import samara from "@/public/assets/png/samara.png";
import rajni from "@/public/assets/png/rajni.png";
import barrie from "@/public/assets/png/barrie.png";
import dora from "@/public/assets/png/dora.png";
import estella from "@/public/assets/png/estella.png";

const page = () => {
  const altText = "image of a person";

  return (
    <section id="imageSlide">
      <div className="menu-container">
        <p>Team</p>
        <div className="team-container">
          <ul>
            <li>
              <h5>Samara</h5>
              <div className="image-main">
                <div className="img-container">
                  <Image src={samara} alt={altText} fill sizes="100" />
                </div>
              </div>
              <h5>Tate</h5>
            </li>
            <li>
              <h5>Rajni</h5>
              <div className="image-main">
                <div className="img-container">
                  <Image src={rajni} alt={altText} fill sizes="100" />
                </div>
              </div>
              <h5>Murgatroyd</h5>
            </li>
            <li>
              <h5>Barrie</h5>
              <div className="image-main">
                <div className="img-container">
                  <Image src={barrie} alt={altText} fill sizes="100" />
                </div>
              </div>
              <h5>Leola Wyatt</h5>
            </li>
            <li>
              <h5>Dora Cate</h5>
              <div className="image-main">
                <div className="img-container">
                  <Image src={dora} alt={altText} fill sizes="100" />
                </div>
              </div>
              <h5>Torosian</h5>
            </li>
            <li>
              <h5>Estella</h5>
              <div className="image-main">
                <div className="img-container">
                  <Image src={estella} alt={altText} fill sizes="100" />
                </div>
              </div>
              <h5>Morce</h5>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default page;
