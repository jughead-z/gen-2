import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import comptalogo from "../../../public/assets/imgs/thumb/comptalogo.png";
import paielogo from "../../../public/assets/imgs/thumb/paielogo.png";
import imlogo from "../../../public/assets/imgs/thumb/imlogo.png";
import Image from "next/image.js";

gsap.registerPlugin(ScrollTrigger);

const StartupAgencyWorkflow = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        let animation_workflow_6 = gsap.utils.toArray(
          ".animation_workflow_6 .workflow__item-4"
        );
        if (animation_workflow_6) {
          if (device_width < 1023) {
            animation_workflow_6.forEach((item, i) => {
              gsap.from(item, {
                scrollTrigger: {
                  trigger: item,
                  start: "top center+=200",
                  markers: false,
                },
                opacity: 0,
                x: -30,
                ease: "power2.out",
                duration: 2,
                stagger: {
                  each: 0.4,
                },
              });
            });
          } else {
            gsap.from(".animation_workflow_6 .workflow__item-4", {
              scrollTrigger: {
                trigger: ".animation_workflow_6",
                start: "top center+=200",
                markers: false,
              },
              opacity: 0,
              x: -30,
              ease: "power2.out",
              duration: 2,
              stagger: {
                each: 0.4,
              },
            });
          }
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="workflow__area-4">
        <div className="container line_4 pt-100 pb-130">
          <div className="line-col-4">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="row animation_workflow_6">
            <div className="col-xxl-12">
              <div className="title-wrapper-6 text-anim">
                <h2 className="sec-subtile-6">Générafi</h2>
                <h3 className="sec-title-6 title-anim">Production comptable</h3>
                <p>
                Découvrez des solutions comptables nouvelle génération,
                <br /> dynamiques et assistées pour automatiser l’ensemble de vos tâches !
                </p>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="workflow__item-4">
                <Image
                  priority
                  width={195}
                  style={{ height: "auto" }}
                  src={comptalogo}
                  alt="Work Image"
                />
                <h4 className="workflow__title-4">Comptabilité</h4>
                <p>
                    Suivez votre performance financière avec une longueur d’avance.
                </p>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="workflow__item-4">
                <Image
                  priority
                  width={195}
                  style={{ height: "auto" }}
                  src={paielogo}
                  alt="Work Image"
                />
                <h4 className="workflow__title-4">Paie</h4>
                <p>
                La gestion de la paie à la portée de tout le monde.
                </p>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="workflow__item-4">
                <Image
                  priority
                  width={195}
                  style={{ height: "auto" }}
                  src={imlogo}
                  alt="Work Image"
                />
                <h4 className="workflow__title-4">Immobilisation</h4>
                <p>
                    Maîtrisez, suivez et gérez l’ensemble de votre actif immobilisé.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StartupAgencyWorkflow;
