import Image from "next/image";
import "./tools.scss";

const abstractOne =
  "https://images.unsplash.com/photo-1605106702734-205df224ecce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80";

const abstractTwo =
  "https://images.unsplash.com/photo-1605106702842-01a887a31122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=600&q=60";

const video =
  "https://assets.mixkit.co/videos/preview/mixkit-texture-of-colored-ink-flowing-in-a-thick-liquid-44821-large.mp4";

function Tools() {
  return (
    <>
      <section id="tools">
        <h3>Tools</h3>
        <div className="tools-container">
          <div className="development-creative-container">
            <div className="icon-container">
              <Image src={abstractOne} alt="abstract" fill sizes="100" />
            </div>
            <div className="items-container">
              <h4>• Development</h4>
              <ul>
                <li>html</li>
                <li>css</li>
                <li>scss</li>
                <li>js</li>
                <li>react</li>
                <li>next</li>
                <li>GSAP</li>
                <li>Framer Motion</li>
                <li>sanity</li>
                <li>supabase</li>
              </ul>
            </div>
          </div>
          <div className="development-creative-container">
            <div className="icon-container asterisk">
              <Image src={abstractTwo} alt="abstract" fill sizes="100" />
            </div>
            <div className="items-container">
              <h4>• Creative</h4>
              <ul>
                <li>adobe xd</li>
                <li>illustrator</li>
                <li>lightroom</li>
                <li>photoshop</li>
                <li>primere pro</li>
                <li>after effects</li>
                <li>dimension</li>
                <li>stable diffusion</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="video-player">
          <video autoPlay muted loop>
            <source src={video} />
          </video>
          <div className="bg" />
        </div>
      </section>
    </>
  );
}

export default Tools;
