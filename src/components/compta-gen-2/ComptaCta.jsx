import Link from "next/link";
import comptamobilr from "../../../public/assets/imgs/thumb/comptamobilr.png";
import Shape21 from "../../../public/assets/imgs/shape/21.png";
import Shape22 from "../../../public/assets/imgs/shape/22.png";
import Image from "next/image";

const ComptaCta = () => {
  return (
    <>
      <div className="cta__area-4 ">
        <div className="container g-0 line_4 pb-150">
          <div className="line-col-4">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="cta__inner-4 cta__compta-cta">
            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="cta__content-4">
                  <Image
                    priority
                    width={270}
                    height={264}
                    src={comptamobilr}
                    alt="Cta Image"
                  />
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
                <div className="cta__content-4">
                  <h2 className="cta__title-4 title-anim">
                    Télécharger la plaquette Compta
                  </h2>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 pt-100">
                <div className="cta__content-4 text-anim">
                 
                  <Link className="btn-started" href="/contact">
                    Télécharger{" "}
                    <span>
                      <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <Image
              priority
              width={150}
              style={{ height: "auto" }}
              src={Shape21}
              alt="shape Image"
              className="cta-shape"
            />
            <Image
              priority
              width={60}
              height={38}
              src={Shape22}
              alt="shape Image"
              className="cta-shape-2"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ComptaCta;
