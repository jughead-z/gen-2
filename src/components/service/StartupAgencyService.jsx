import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link";
import service1 from "../../../public/assets/imgs/service/4/service-1.png";
import iconeef from "../../../public/assets/imgs/service/4/iconeef.png";
import iconeTS from "../../../public/assets/imgs/service/4/iconeTS.png";
import iconetva from "../../../public/assets/imgs/service/4/iconetva.png";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const StartupAgencyService = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".fade_bottom_2", { y: 30, opacity: 0 });

        if (device_width < 1023) {
          const fadeArray = gsap.utils.toArray(".fade_bottom_2");
          fadeArray.forEach((item, i) => {
            let fadeTl = gsap.timeline({
              scrollTrigger: {
                trigger: item,
                start: "top center+=200",
              },
            });
            fadeTl.to(item, {
              y: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1.5,
            });
          });
        } else {
          gsap.to(".fade_bottom_2", {
            scrollTrigger: {
              trigger: ".fade_bottom_2",
              start: "top center+=300",
              markers: false,
            },
            y: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 1,
            stagger: {
              each: 0.2,
            },
          });
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="service__area-4">
        <div className="container g-0 line_4 pt-150 pb-140">
          <div className="line-col-4">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="row">
            <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6">
              <div className="service__left-6">
                <h2 className="sec-subtile-6">Générafi</h2>
                <h3 className="sec-title-6 title-anim">
                  Télé <br /> déclaration <br /> 
                </h3>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-6">
              <div className="service__right-4">
                <p>
                Profitez de toute notre expertise au service de vos
                obligations déclaratives.{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="service__inner-4">
            <div className="row">
              <div className="col-xxl-5 col-xl-5 col-lg-6 col-md-6">
                <div className="service__img-left">
                  <Image
                    priority
                    width={430}
                    style={{ height: "auto" }}
                    src={service1}
                    alt="Service"
                  />
                </div>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-6 col-md-6">
                <div className="service__list-4">
                  <div className="service__item-4 fade_bottom_2">
                    <div className="service__item-number">
                      <Image priority width={50} style={{height:"auto"}} src={iconeef} alt="logo" />
                    </div>
                    <div className="service__title-wrapper-4">
                      <h4>
                        <Link
                          className="service__item-title"
                          href="/service-details"
                        >
                          États Financiers & Fiscaux
                        </Link>
                      </h4>
                    </div>
                    <div className="service__item-icon">
                      <Link href="/service-details">
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="service__item-4 fade_bottom_2">
                    <div className="service__item-number">
                    <Image priority width={50} style={{height:"auto"}} src={iconeTS} alt="logo" />
                    </div>
                    <div className="service__title-wrapper-4">
                      <h4>
                        <Link
                          className="service__item-title"
                          href="/service-details"
                        >
                          Traitements & Salaire 
                        </Link>
                      </h4>
                    </div>
                    <div className="service__item-icon">
                      <Link href="/service-details">
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                  <div className="service__item-4 fade_bottom_2">
                    <div className="service__item-number">
                    <Image priority width={50} style={{height:"auto"}} src={iconetva} alt="logo" />
                    </div>
                    <div className="service__title-wrapper-4">
                      <h4>
                        <Link
                          className="service__item-title"
                          href="/service-details"
                        >
                          TVA
                        </Link>
                      </h4>
                    </div>
                    <div className="service__item-icon">
                      <Link href="/service-details">
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StartupAgencyService;
