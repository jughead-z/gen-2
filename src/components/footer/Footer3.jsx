import Link from "next/link";
import ThumbFooter from "../../../public/assets/imgs/thumb/footer.jpg";
import genfooter from "../../../public/assets/imgs/thumb/genfooter.jpg";
import generafilogo from "../../../public/assets/imgs/logo/generafilogo.png";
import FooterLogoWhite from "../../../public/assets/imgs/logo/footer-logo-white.png";
import Image from "next/image";

export default function Footer3() {
  return (
    <>
      <footer className="footer__area">
        <div className="footer__top">
          <div className="container footer-line"></div>
          <Image
            priority
            width={1160}
            style={{ height: "auto" }}
            src={genfooter}
            alt="Footer Image"
            data-speed="0.75"
          />
        </div>

        <div className="footer__btm">
          <div className="container">
            <div className="row footer__row">
              <div className="col-xxl-12">
                <div className="footer__inner">
                  <div className="footer__widget">
                    <Image
                      priority
                      style={{ width: "auto", height: "auto" }}
                      className="footer__logo"
                      src={generafilogo}
                      alt="Footer Logo"
                    />
                    <p>
                    Depuis notre création en 2011, notre mission est d’accompagner la transformation digitale de l’entreprise marocaine pour simplifier et maîtriser sa gestion au quotidien et se concentrer sur l’essentiel.
                    </p>
                    <ul className="footer__social">
                      <li>
                        <a href="#">
                          <span>
                            <i className="fa-brands fa-facebook-f"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                            <i className="fa-brands fa-twitter"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                            <i className="fa-brands fa-instagram"></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span>
                            <i className="fa-brands fa-linkedin"></i>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="footer__widget-2">
                    <h2 className="footer__widget-title">Produits</h2>
                    <ul className="footer__link">
                      <li>
                        <Link href="/">Etats Financiers</Link>
                      </li>
                      <li>
                        <Link href="/">Traitement & salaire</Link>
                      </li>
                      <li>
                        <Link href="/">TVA</Link>
                      </li>
                      <li>
                        <Link href="/">Compta</Link>
                      </li>
                      <li>
                        <Link href="/">Paie</Link>
                      </li>
                      <li>
                        <Link href="/">Immobilisations</Link>
                      </li>
                      <li>
                        <Link href="/">Ineo</Link>
                      </li>
                      
                    </ul>
                  </div>

                  <div className="footer__widget-3">
                    <h2 className="footer__widget-title">Contact</h2>
                    <ul className="footer__contact">
                      <li>113 Avenue Mers Sultan, 4ème étage. Casablanca</li>
                      <li>
                        <a href="tel:02574328301" className="phone">
                        +212 5 22 27 42 14{" "}
                        </a>
                      </li>
                      <li>
                        <a href="mailto:contact@generafi.ma">
                        contact@generafi.ma

                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="footer__widget-4">
                    <h2 className="project-title">
                      Avez-vous des questions ?
                    </h2>
                    <div className="btn_wrapper">
                      <Link
                        href="/contact"
                        className="wc-btn-primary btn-hover btn-item"
                      >
                        <span></span> Contactez-nous{" "}
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                    <h3 className="contact-time">9H - 18H </h3>
                    <h4 className="contact-day">Lundi - Vendredi</h4>
                  </div>

                  <div className="footer__copyright">
                    <p>
                      © 2022 - 2025 | Alrights reserved by{" "}
                      <a href="https://aeon.ma/" target="_blank">
                        Aeon
                      </a>
                    </p>
                  </div>

                  <div className="footer__subscribe">
                    <form action="#">
                      <input
                        type="email"
                        name="email"
                        placeholder="Entrez votre adresse mail"
                      />
                      <button type="submit" className="subs-btn">
                        <i className="fa-solid fa-paper-plane"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
