import Link from "next/link";
import logoWhite2 from "../../../public/assets/imgs/logo/site-logo-white-2.png";
import generafilogo from "../../../public/assets/imgs/logo/generafilogo.png";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Footer4() {

  const menuAnim = useRef();
  useEffect(() => {
    if (menuAnim.current) {
      menuAnimation();
    }
  }, []);
  const menuAnimation = () => {
    let rootParent = menuAnim.current.children;
    for (let i = 0; i < rootParent.length; i++) {
      let firstParent = rootParent[i].children;
      let arr = firstParent[0].textContent.split("")
      let spanData = ''
      for (let j = 0; j < arr.length; j++) {
        if(arr[j] == ' ') {
          spanData += `<span style='width:6px;'>${arr[j]}</span>`;
        } else {
          spanData += `<span>${arr[j]}</span>`;
        }
      }
      let result = '<div class="menu-text">' + spanData + '</div>';
      firstParent[0].innerHTML = result
    }
  };

  return (
    <>
      <footer className="footer__area-6">
        <div className="container g-0 line_4">
          <div className="line-col-4">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="row">
            <div className="col-xxl-12">
              <div className="footer__top-6 pt-150 pb-140">
                <div className="footer__item-6">
                  <Image
                    priority
                    style={{ width: "auto", height: "auto" }}
                    className="footer__logo logo-light"
                    src={logoWhite2}
                    alt="Footer Logo"
                  />
                  <Image
                    priority
                    style={{ width: "auto", height: "auto" }}
                    className="footer__logo logo-dark"
                    src={generafilogo}
                    alt="Footer Logo"
                  />
                  <p>
                   
                    Depuis notre création en 2011, notre mission est d’accompagner
                    la transformation digitale de l’entreprise marocain
                  </p>
                  <ul className="footer__social-6">
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

                <div className="footer__item-6">
                  <h2 className="footer__item-title">Information</h2>
                  <ul className="footer__link-6">
                    <li>
                      <Link href="/about">About Company</Link>
                    </li>
                    <li>
                      <Link href="/career">Career</Link>
                    </li>
                    <li>
                      <Link href="/portfolio">Case Study</Link>
                    </li>
                    <li>
                      <a href="#">Unloack System</a>
                    </li>
                    <li>
                      <a href="#">Blueprint</a>
                    </li>
                  </ul>
                </div>

                <div className="footer__item-6">
                  <h2 className="footer__item-title">Contact Us</h2>
                  <ul className="footer__info-6">
                    <li>113 Avenue Mers Sultan, 4ème étage. Casablanca</li>
                    <li>
                      <a href="tel:0522274214" className="phone">
                        (+212) 522-27-4214{" "}
                      </a>
                    </li>
                    <li>
                      <a href="mailto:contact@generafi.ma">
                        contact@generafi.ma
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="footer__item-6">
                  <h2 className="footer__item-title">newsletter</h2>
                  <form action="#">
                    <div className="footer__newsletter-6">
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Enter your email"
                      />
                      <button type="submit">
                        <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                    <div className="footer__chekbox">
                      <input type="checkbox" id="check_box" name="checkbox" />
                      <label>
                        I’m okay with getting emails and having that activity
                        and privacy policy.
                      </label>
                    </div>
                  </form>
                </div>
              </div>
              <div className="footer__btm-6">
                <div className="row">
                  <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-5">
                    <div className="footer__copyright-6">
                      <p>
                        © 2023 | Alrights reserved by <br />{" "}
                        <a href="https://aeon360.ma/" target="_blank">
                          Aeon 360
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-7">
                    <div className="footer__nav">
                      <ul className="footer-menu menu-anim" ref={menuAnim}>
                        <li>
                          <Link href="/about">about us</Link>
                        </li>
                        <li>
                          <Link href="/contact">contact</Link>
                        </li>
                        <li>
                          <Link href="/career">Career</Link>
                        </li>
                        <li>
                          <Link href="/faq">FAQs</Link>
                        </li>
                      </ul>
                    </div>
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