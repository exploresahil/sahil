import Img from "@/components/default/Img";
import React from "react";

import samara from "@/public/images/portfolio/image-slide-menu/Samara.png";
import rajni from "@/public/images/portfolio/image-slide-menu/Rajni.png";
import barrie from "@/public/images/portfolio/image-slide-menu/Barrie.png";
import dora from "@/public/images/portfolio/image-slide-menu/Dora.png";
import estella from "@/public/images/portfolio/image-slide-menu/Estella.png";

const page = () => {
  return (
    <div className="image-slide-menu-container">
      <div className="menu-container">
        <p>
          Team{" "}
          <span>
            View on larger screen with mouse pointer for better experience
          </span>
        </p>
        <div className="team-container">
          <ul>
            <li>
              <h5>Samara</h5>
              <Img src={samara} alt="person" />
              <h5>Tate</h5>
            </li>
            <li>
              <h5>Rajni</h5>
              <Img src={rajni} alt="person" />
              <h5>Murgatroyd</h5>
            </li>
            <li>
              <h5>Barrie</h5>
              <Img src={barrie} alt="person" />
              <h5>Leola Wyatt</h5>
            </li>
            <li>
              <h5>Dora Cate</h5>
              <Img src={dora} alt="person" />
              <h5>Torosian</h5>
            </li>
            <li>
              <h5>Estella</h5>
              <Img src={estella} alt="person" />
              <h5>Morce</h5>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
