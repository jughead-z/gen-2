import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger, ScrollSmoother } from "@/plugins";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const PaieAtout = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        let animation_services_7 = gsap.utils.toArray(
          ".animation_service_7 .service__item-7"
        );
        gsap.set(animation_services_7, {
          opacity: 0,
          x: -30,
        });

        if (animation_services_7) {
          if (device_width < 1023) {
            animation_services_7.forEach((item, i) => {
              gsap.to(item, {
                scrollTrigger: {
                  trigger: item,
                  start: "top center+=200",
                  markers: false,
                },
                opacity: 1,
                x: -0,
                ease: "power2.out",
                duration: 2,
                stagger: {
                  each: 0.4,
                },
              });
            });
          } else {
            gsap.to(".animation_service_7 .service__item-7", {
              scrollTrigger: {
                trigger: ".animation_service_7",
                start: "top center+=200",
                markers: false,
              },
              opacity: 1,
              x: 0,
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
      <section className="service__area-7 pt-130">
        <div className="container">
          <div className="row">
            <div className="col-xxl-12">
              <div className="service__items-7 animation_service_7">
                <div className="service__item-7">
                  <Link href="">
                    <h3 className="service__title-7">
                    Conformité <span>Légale</span>
                    </h3>
                  </Link>
                  <p>
                  Conformité règlementaire à jour 
                  avec les dispositions légales actuelles en vigueur
                  </p>
                 
                </div>
                <div className="service__item-7">
                  <Link href="">
                    <h3 className="service__title-7">
                    Gestion<span>Mensuelle</span>{" "}
                    </h3>
                  </Link>
                  <p>
                    Autonomie totale dans la gestion de la paie mensuelle
                  </p>
                  
                </div>
                <div className="service__item-7">
                  <Link href="/service-details">
                    <h3 className="service__title-7">
                    Optimisation de  <span>Productivité</span>{" "}
                    </h3>
                  </Link>
                  <p>
                  Assistance du service RH pour améliorer sa productivité
                  </p>
                  
                </div>
                <div className="service__item-7">
                  <Link href="/service-details">
                    <h3 className="service__title-7">
                    Maîtrisez Vos  <span> Données RH</span>{" "}
                    </h3>
                  </Link>
                  <p>
                  Une maîtrise de ses propres données sociales
                  </p>
                  
                </div>
                <div className="service__item-7">
                  <Link href="/service-details">
                    <h3 className="service__title-7">
                        Paie<span>Fiable</span>
                    </h3>
                  </Link>
                  <p>
                    Fiabilisation et automatisation du traitement de la paie
                  </p>
                  
                </div>
                <div className="service__item-7">
                  <Link href="/service-details">
                    <h3 className="service__title-7">
                        Contrôle<span>Reporting </span>{" "}
                    </h3>
                  </Link>
                  <p>
                  Mise en place d’outils de contrôle et de reporting
                  </p>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaieAtout;
