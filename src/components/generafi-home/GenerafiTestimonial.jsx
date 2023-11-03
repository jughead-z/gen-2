import { FreeMode, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import marjane from "../../../public/assets/imgs/testimonial/4/marjane.jpg";
import yanna from "../../../public/assets/imgs/testimonial/4/ynna.jpg";
import pharma from "../../../public/assets/imgs/testimonial/4/pharma.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const StartupAgencyTestimonial = () => {
  return (
    <>
      <section className="testimonial__area-4 ">
        <div className="container g-0 line_4">
          <div className="line-col-4">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="row">
            <div className="col-xxl-12">
              <div className="testimonial__sec-title text-anim">
                <h2 className="sec-subtile-6">Témoignages</h2>
                <h3 className="sec-title-6 title-anim">Feedback Clients </h3>
                <p>
                De nombreux clients ont choisi de nous faire confiance, et de partager avec nous leurs témoignages...
                </p>
              </div>
            </div>
            <div className="testimonial__slider-4">
              <Swiper
                modules={[FreeMode, Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={3}
                freeMode={true}
                loop={true}
                speed={2000}
                navigation={{
                  prevEl: ".prev-button",
                  nextEl: ".next-button",
                }}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                pagination={{
                  el: ".pagination",
                  type: "fraction",
                }}
                className="swiper testimonial__slider-4"
              >
                <div className="swiper-wrapper">
                  <SwiperSlide>
                    <div className="testimonial__slide-4">
                      <Image
                        priority
                        width={85}
                        height={85}
                        className="testimonial__img-4"
                        src={marjane}
                        alt="Testimonial Image"
                      />
                      <div className="testimonial__info-4">
                        <h4 className="testimonial__feedback-4">
                          Marjane
                        </h4>
                        <p>
                        Notre équipe de comptabilité tient à remercier l’équipe GENERAFI pour ses produits et services de qualité. 
                        Grâce à vous, nos déclarations fiscales ont progressé plus rapidement. 
                        Votre excellent service après-vente nous a aidés en cas de blocage, et votre professionnalisme a été grandement apprécié.
                        </p>
                        <h5 className="testimonial__name-4">
                          Rachid RAGOUBA
                        </h5>
                        <h6 className="testimonial__role-4">
                          Superviseur Comptable{" "}
                        </h6>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial__slide-4">
                      <Image
                        priority
                        width={85}
                        height={85}
                        className="testimonial__img-4"
                        src={pharma}
                        alt="Testimonial Image"
                      />
                      <div className="testimonial__info-4">
                        <h4 className="testimonial__feedback-4">Pharma5</h4>
                        <p>
                        Je suis pleinement satisfait de la qualité des produits GENERAFI.
                         Je les recommande à toutes nos filiales en raison de leur praticité, facilité d’utilisation et conformité aux normes professionnelles. 
                        Aucune remarque à faire, tant sur la forme que sur le fond. 
                        </p>
                        <h5 className="testimonial__name-4">Abderrahim DOUAH</h5>
                        <h6 className="testimonial__role-4">Directeur Financier - Groupe</h6>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial__slide-4">
                      <Image
                        priority
                        width={85}
                        height={85}
                        className="testimonial__img-4"
                        src={yanna}
                        alt="Testimonial Image" 
                      />
                      <div className="testimonial__info-4">
                        <h4 className="testimonial__feedback-4">
                          Yanna
                        </h4>
                        <p>
                        Chez PALMERAIE INDUSTRIES, nous sommes ravis des services de GENERAFI et de leurs produits de qualité. 
                        Nous les recommandons chaudement à nos partenaires.
                        </p>
                        <h5 className="testimonial__name-4">Abdelkarim RYASSY</h5>
                        <h6 className="testimonial__role-4">
                          Directeur Financier - Groupe
                        </h6>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial__slide-4">
                      <Image
                        priority
                        width={85}
                        height={85}
                        className="testimonial__img-4"
                        src={yanna}
                        alt="Testimonial Image"
                      />
                      <div className="testimonial__info-4">
                        <h4 className="testimonial__feedback-4">
                          Design Quality
                        </h4>
                        <p>
                          Our philosophy is built on people who are addicted on
                          creating, learning, and growing together, which allows
                          us to discover better others miss.
                        </p>
                        <h5 className="testimonial__name-4">
                          Jessica Sherlock
                        </h5>
                        <h6 className="testimonial__role-4">
                          Manager, Oitaka{" "}
                        </h6>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial__slide-4">
                      <Image
                        priority
                        width={85}
                        height={85}
                        className="testimonial__img-4"
                        src={yanna}
                        alt="Testimonial Image"
                      />
                      <div className="testimonial__info-4">
                        <h4 className="testimonial__feedback-4">Clean Code</h4>
                        <p>
                          I am very glod happy with this theme, the website
                          loads much faster than any other theme I have used so
                          far clean code and responsive layout.
                        </p>
                        <h5 className="testimonial__name-4">Sharoon Kavin</h5>
                        <h6 className="testimonial__role-4">CEO, Sharoon</h6>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="testimonial__slide-4">
                      <Image
                        priority
                        width={85}
                        height={85}
                        className="testimonial__img-4"
                        src={yanna}
                        alt="Testimonial Image"
                      />
                      <div className="testimonial__info-4">
                        <h4 className="testimonial__feedback-4">
                          Instant Support
                        </h4>
                        <p>
                          In the next time I hire Axtra as they helping
                          innovators and brands through cultural insight,
                          strategiccal vision, and innovation and look too
                          beyond.
                        </p>
                        <h5 className="testimonial__name-4">Sharly Mehroon</h5>
                        <h6 className="testimonial__role-4">
                          Manager, Kavitan
                        </h6>
                      </div>
                    </div>
                  </SwiperSlide>
                </div>
                <div className="testimonial__btn-4">
                  <div
                    style={{ cursor: "pointer" }}
                    className="next-button swipper-btn"
                  >
                    <i className="fa-solid fa-arrow-left"></i>
                  </div>
                  <div
                    style={{ cursor: "pointer" }}
                    className="prev-button swipper-btn"
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </div>
                  <div className="pagination testimonial__pagination-4">
                    <div className="pag"></div>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StartupAgencyTestimonial;
