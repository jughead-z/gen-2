import ServiceDetail from "../../../public/assets/imgs/thumb/service-detail.png";
import Shape6 from "../../../public/assets/imgs/icon/shape-6.png";
import Image from "next/image";

const Paief = () => {
  return (
    <>
      <section className="service__detail">
        <div className="container g-0 line pb-140">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-title title-anim">
                GénéraFi Paie réduit votre temps de la paie de moitié !
                </h2>
              </div>
            </div>
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              <div className="service__detail-circle">
                <span></span>
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
                    "La mise en place de profils salariaux, la gestion des spécificités, la souplesse du paramétrage, la reprise de données inter-périodes... Découvrez la batterie de fonctionnalités mises à votre disposition pour fluidifier et automatiser au maximum la tenue mensuelle de votre paie."
                  }
                </p>
                <p>
                Plus loin, accéder au détail de calcul de chaque rubrique du bulletin grâce aux pistes d’audit mises en place sur chaque élément. 
                Dotée d’une GED intégrée, GénéraFi Paie vous permet de constituer un dossier électronique pour chacun de vos salariés..
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Paief;
