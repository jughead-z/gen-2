import immo1 from "../../../public/assets/imgs/story/immo1.jpg";
import immo2 from "../../../public/assets/imgs/story/immo2.jpg";
import immo3 from "../../../public/assets/imgs/story/immo3.jpg";
import immo4 from "../../../public/assets/imgs/story/immo4.jpg";
import Image from "next/image";

const ImmoAbout = () => {
  return (
    <>
      <section className="story__area">
        <div className="container g-0 line pt-140">
          <span className="line-3"></span>
          <div className="sec-title-wrapper">
            

            <div className="row">
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                <h2 className="sec-sub-title title-anim">Présentation</h2>
                <h3 className="sec-title title-anim">GénéraFi Immo</h3>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                <div className="story__text">
                  <p>
                  Quelle que soit la structure de votre organisation, GENERAFI IMMO est la solution de gestion d’immobilisations qui vous vous apporte simplicité et sérénité 
                  dans la gestion et la maîtrise et de votre parc d’immobilisations tout en assurant une conformité comptable et fiscale permanente.
                  </p>
                  <p>
                  Gérez l’ensemble de vos biens corporels et incorporels, qu’ils soient en propriété, sous contrat de crédit-bail ou de location…
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3">
              <div className="story__img-wrapper">
                <Image
                  priority
                  width={300}
                  style={{ height: "auto" }}
                  src={immo1}
                  alt="Story Thumbnail"
                  className="w-100"
                />
              </div>
            </div>
            <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
              <div className="story__img-wrapper img-anim">
                <Image
                  priority
                  width={520}
                  style={{ height: "auto" }}
                  src={immo3}
                  alt="Story Thumbnail"
                  data-speed="auto"
                />
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4">
              <div className="story__img-wrapper">
                <Image
                  priority
                  width={230}
                  style={{ height: "auto" }}
                  src={immo2}
                  alt="Story Thumbnail"
                />
                <Image
                  priority
                  width={410}
                  style={{ height: "auto" }}
                  src={immo4}
                  alt="Story Thumbnail"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImmoAbout;
