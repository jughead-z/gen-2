import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "@/plugins";
import birth from "../../../public/assets/imgs/generafi/birth.png";
import efasset from "../../../public/assets/imgs/generafi/efasset.png";
import Imasset from "../../../public/assets/imgs/generafi/Imasset.png";
import tvaasset from "../../../public/assets/imgs/generafi/tvaasset.png";
import Home7sh1 from "../../../public/assets/imgs/home-7/sh-1.jpg";
import Home7sh2 from "../../../public/assets/imgs/home-7/sh-2.jpg";
import Home7sh3 from "../../../public/assets/imgs/home-7/sh-3.jpg";
import Home7sh4 from "../../../public/assets/imgs/home-7/sh-4.jpg";
import Home7scroll from "../../../public/assets/imgs/home-7/scroll.png";
import Home7shape6 from "../../../public/assets/imgs/home-7/shape-6.png";
import Image from "next/image.js";

const GenerafiHero = () => {
  const creativeSection = useRef();
  const solutionSection = useRef();
  const heroContentSection = useRef();
  const heroThumAnim = useRef();

  useEffect(() => {
    if (typeof window !== "undefined") {
      let tHero = gsap.context(() => {
        let hero7_thum_anim = heroThumAnim.current;
        if (hero7_thum_anim) {
          gsap.from(".image-1", {
            x: 65,
            yPercent: 100,
            opacity: 0,
            duration: 2,
            delay: 1,
          });

          gsap.from(".image-2", {
            delay: 1.5,
            scale: 0,
            duration: 1.5,
          });

          gsap.from(".image-3", {
            x: 65,
            yPercent: -100,
            duration: 2,
            opacity: 0,
            delay: 1,
          });
          gsap.from(".image-4", {
            xPercent: -100,
            yPercent: -100,
            duration: 2,
            opacity: 0,
            delay: 1,
          });
        }

        let split_creative = new SplitText(creativeSection.current, {
          type: "chars",
        });
        let split_solution = new SplitText(solutionSection.current, {
          type: "chars",
        });
        let split_herocontent = new SplitText(heroContentSection.current, {
          type: "chars words",
        });

        gsap.from(split_creative.chars, {
          duration: 1,
          x: 70,
          autoAlpha: 0,
          stagger: 0.1,
        });
        gsap.from(
          split_solution.chars,
          { duration: 1, x: 70, autoAlpha: 0, stagger: 0.1 },
          "-=1.5"
        );
        gsap.from(
          split_herocontent.words,
          { duration: 1, x: 50, autoAlpha: 0, stagger: 0.05 },
          "-=1"
        );
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="service__hero-2">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="service__hero-inner-2">
                <div className="service__hero-left-2">
                  <Image
                    priority
                    width={240}
                    style={{ height: "auto" }}
                    src={birth}
                    alt="Image"
                    className="image-1"
                  />
                  <Image
                    priority
                    width={240}
                    style={{ height: "auto" }}
                    src={efasset}
                    alt="Image"
                    className="image-2"
                  />
                  <Image
                    priority
                    width={240}
                    style={{ height: "auto" }}
                    src={Imasset}
                    alt="Image"
                    className="image-3"
                  />
                  <Image
                    priority
                    width={240}
                    style={{ height: "auto" }}
                    src={tvaasset}
                    alt="Image"
                    className="image-4"
                  />
                </div>
                <div
                  className="service__hero-right-2 hero7__thum-anim"
                  ref={heroThumAnim}
                >
                  <h1 className="title creative" ref={creativeSection}>
                    Libérez{" "}
                    <span className="solution" ref={solutionSection}>
                      potontiel
                    </span>{" "}
                  </h1>
                  <h2 className="animate_content" ref={heroContentSection}>
                    {" "}
                    de votre entreprise
                  </h2>
                  <p className="animate_content" ref={heroContentSection}>
                    {" "}
                    Éditeur marocain de logiciels de gestion fiables
                    et fonctionnels orientés métier et expérience utilisateur.
                  </p>
                  <Image
                    priority
                    style={{ width: "auto", height: "auto" }}
                    src={Home7scroll}
                    alt="scroll Image"
                    className="scroll"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Image
          priority
          width={132}
          height={132}
          src={Home7shape6}
          alt="Shape Image"
          className="shape-1"
        />
      </section>
    </>
  );
};

export default GenerafiHero;
