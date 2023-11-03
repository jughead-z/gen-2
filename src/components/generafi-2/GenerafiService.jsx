import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "@/plugins";
import Link from "next/link.js";
import ineoassets from "../../../public/assets/imgs/blog/3/bureau.jpg";
import immoasset from "../../../public/assets/imgs/blog/3/finger.jpg";
import logoimmo from "../../../public/assets/imgs/blog/3/logoimmo.png";
import logoineo from "../../../public/assets/imgs/blog/3/logo_ineo.png";
import assetIneo from "../../../public/assets/imgs/blog/3/assetIneo.jpg";
import assetImmo from "../../../public/assets/imgs/blog/3/assetImmo.jpg";


import Image from "next/image.js";

gsap.registerPlugin(ScrollTrigger);

const BlogElementV2 = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      let device_width = window.innerWidth;
      let tHero = gsap.context(() => {
        gsap.set(".blog__animation .blog__item-3", { x: 50, opacity: 0 });

        if (device_width < 1023) {
          const blogList = gsap.utils.toArray(".blog__animation .blog__item-3");
          blogList.forEach((item, i) => {
            let blogTl = gsap.timeline({
              scrollTrigger: {
                trigger: item,
                start: "top center+=200",
              },
            });
            blogTl.to(item, {
              x: 0,
              opacity: 1,
              ease: "power2.out",
              duration: 1.5,
            });
          });
        } else {
          gsap.to(".blog__animation .blog__item-3", {
            scrollTrigger: {
              trigger: ".blog__animation .blog__item-3",
              start: "top center+=300",
              markers: false,
            },
            x: 0,
            opacity: 1,
            ease: "power2.out",
            duration: 2,
            stagger: {
              each: 0.3,
            },
          });
        }
      });
      return () => tHero.revert();
    }
  }, []);
  return (
    <>
      <section className="blog__area-3 blog-v3 blog__animation">
        <div className="container line">
          <div className="line-3"></div>
          <div className="row ">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper text-anim pt-130">
                <h2 className="sec-sub-title">Générafi</h2>
                <h3 className="sec-title title-anim">
                  Gestion <br />
                  d’entreprise
                </h3>
                <p>
                  Optimisez la gestion de votre entreprise 
                  Lorem ipsum. lorem ipsum lorem ipsum lorem
                  lorem ipsum.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <article className="blog__item-3">
                <div className="blog__img-wrapper-3">
                  <Link href="/blog-details">
                    <div className="img-box">
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={assetIneo}
                        alt="Blog Thumbnail"
                      />
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={assetIneo}
                        alt="Blog Thumbnail"
                      />
                    </div>
                  </Link>
                </div>
                <div className="blog__info-3">
                <Image
                        priority
                        style={{ width: "auto", height: "50px" }}
                        className="image-box__item"
                        src={logoineo}
                        alt="Logo Ineo"
                      />
                  <h4 className="blog__meta">
                    <Link href="/category">Gestion commerciale</Link>
                  </h4>
                  <h5>
                    <Link href="/blog-details" className="blog__title-3">
                    Pilotez votre entreprise tout en étant connecté 
                    à votre entourage professionnel.
                    </Link>
                  </h5>
                  <Link href="/blog-details" className="blog__btn">
                    Voir plus{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </article>
            </div>

            <div className="col-xxl-6 col-xl-6 col-lg-6">
              <article className="blog__item-3">
                <div className="blog__img-wrapper-3">
                  <Link href="/blog-details">
                    <div className="img-box">
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={assetImmo}
                        alt="Blog Thumbnail"
                      />
                      <Image
                        priority
                        style={{ width: "auto", height: "auto" }}
                        className="image-box__item"
                        src={assetImmo}
                        alt="Blog Thumbnail"
                      />
                    </div>
                  </Link>
                </div>
                <div className="blog__info-3">
                   <Image
                        priority
                        style={{ width: "auto", height: "50px" }}
                        className="image-box__item"
                        src={logoimmo}
                        alt="Logo Immobilisation"
                      />
                  <h4 className="blog__meta">
                    <Link href="/category">Gestion d’immobilisations</Link>
                  </h4>
                  <h5>
                    <Link href="/blog-details" className="blog__title-3">
                      Gérez efficacement votre actif immobilisé, 
                      tant physiquement que comptablement
                    </Link>
                  </h5>
                  <Link href="/blog-details" className="blog__btn">
                    voir plus{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogElementV2;
