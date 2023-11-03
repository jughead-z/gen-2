import Image from "next/image";

const ComptaAbout = () => {
  return (
    <>
      <section className="story__area">
        <div className="container g-0 line pt-140">
          <span className="line-3"></span>
          <div className="sec-title-wrapper">
            

            <div className="row">
              <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5">
                <h2 className="sec-sub-title title-anim">Présentation</h2>
                <h3 className="sec-title title-anim">GénéraFi Compta</h3>
              </div>
              <div className="col-xxl-7 col-xl-7 col-lg-7 col-md-7">
                <div className="story__text">
                  <p>
                  Riche en fonctionnalités et orientée productivité, GénéraFi Compta se présente comme une solution innovante, 
                  performante et sécurisée. Conçue, testée et approuvée par des praticiens de la comptabilité, 
                  GénéraFi Compta vous accompagne tout au long du processus de la production comptable et financière 
                  avec une série de fonctionnalités pratiques et une assistance au traitement pour une meilleure productivité pour tenir vos échéances. 
                  </p>
                  <p>
                  Conforme à la législation comptable marocaine selon ses différents modes, 
                  GénéraFi Compta offre une navigation intuitive et une simplicité à l’exécution 
                  qui vous permettra de faire face aux obligations comptables de votre entreprise et de vos clients.
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

export default ComptaAbout;
