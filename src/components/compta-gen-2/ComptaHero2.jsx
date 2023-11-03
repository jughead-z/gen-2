import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "@/plugins";
import ArrowDownSm from "../../../public/assets/imgs/icon/arrow-down-sm.png";
import comptabanner from "../../../public/assets/imgs/hero/3/comptabanner.jpg";
import Shape1 from "../../../public/assets/imgs/home-7/shape-1.png";
import Shape2 from "../../../public/assets/imgs/home-7/shape-2.png";
import Shape22 from "../../../public/assets/imgs/home-7/shape-22.png";
import cmpta from "../../../public/assets/imgs/home-7/cmpta.png"
import Shape3 from "../../../public/assets/imgs/home-7/shape-3.png";
import Image from "next/image.js";

const ComptaHero2 = () => {

  return (
    <>
      <section className="hero__area-7">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="hero__title-wrap-7">
                <h1 className="hero__title-7">
                  Comptabilité{" "}
                  <Image
                    priority
                    width={135}
                    style={{ height: "auto" }}
                    src={Shape1}
                    alt="shape"
                  />{" "}
                  <Image
                    priority
                    width={125}
                    style={{ height: "auto" }}
                    src={Shape22}
                    alt="shape"
                  />
                </h1>
              </div>
              <div className="hero__text-7">
                <h2 className="about"><Image
                    priority
                    width={125}
                    style={{ height: "auto" }}
                    src={cmpta}
                    alt="shape"
                  /></h2>
                <p>
                Suivez votre performance financière avec une longueur d’avance…
                </p>
              </div>
            </div>
          </div>
        </div>

        <Image
          priority
          width={320}
          style={{ height: "auto" }}
          src={Shape3}
          alt="shape"
          className="shape-1"
        />
      </section>
    </>
  );
};

export default ComptaHero2;