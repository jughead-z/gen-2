import ServiceDetail from "../../../public/assets/imgs/portfolio/detail/BanCompta.png";
import Shape6 from "../../../public/assets/imgs/icon/shape-6.png";
import Image from "next/image";

const PaieSecond = () => {
  return (
    <>
      <section className="service__detail">
        <div className="container g-0 line pt-100">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-title title-anim">
                GénéraFi paie saura combler vos attentes !
                </h2>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              <div className="service__detail-circle">
                <span className="compta"></span>
              </div>
            </div>
            <div className="col-xxl-9 col-xl-9 col-lg-9 col-md-9">
              <div className="service__detail-img">
                <Image
                  priority
                  width={960}
                  style={{ height: "auto" }}
                  src={ServiceDetail}
                  alt="Service detail image"
                />
                <Image
                  priority
                  width={51}
                  style={{ height: "auto" }}
                  src={Shape6}
                  alt="Service shape image"
                  className="sd-shape"
                />
              </div>
              <div className="service__detail-content">
                <p>
                  {
                    "Les fonctionnalités avancées de notre solution de comptabilité sauront vous satisfaire et vous. donner une longueur d’avance : Traitement de documents, Gestion comptable des immobilisations, Traitement de la TVA, Multi-devises…"
                  }
                </p>
                <p>
                Nous vous invitons à découvrir le reste de ses fonctionnalités fabuleuses dans la plaquette commerciale disponible plus bas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaieSecond;
