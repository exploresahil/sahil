import Image from "next/image";
import "./imageslide.scss";

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
                  <Image
                    src="/assets/png/samara.png"
                    alt={altText}
                    fill
                    sizes="100"
                  />
                </div>
              </div>
              <h5>Tate</h5>
            </li>
            <li>
              <h5>Rajni</h5>
              <div className="image-main">
                <div className="img-container">
                  <Image
                    src="/assets/png/rajni.png"
                    alt={altText}
                    fill
                    sizes="100"
                  />
                </div>
              </div>
              <h5>Murgatroyd</h5>
            </li>
            <li>
              <h5>Barrie</h5>
              <div className="image-main">
                <div className="img-container">
                  <Image
                    src="/assets/png/barrie.png"
                    alt={altText}
                    fill
                    sizes="100"
                  />
                </div>
              </div>
              <h5>Leola Wyatt</h5>
            </li>
            <li>
              <h5>Dora Cate</h5>
              <div className="image-main">
                <div className="img-container">
                  <Image
                    src="/assets/png/dora.png"
                    alt={altText}
                    fill
                    sizes="100"
                  />
                </div>
              </div>
              <h5>Torosian</h5>
            </li>
            <li>
              <h5>Estella</h5>
              <div className="image-main">
                <div className="img-container">
                  <Image
                    src="/assets/png/estella.png"
                    alt={altText}
                    fill
                    sizes="100"
                  />
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
