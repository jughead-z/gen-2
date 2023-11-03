import Image from "next/image";

const PaieAbout = () => {
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
                  GénéraFi Paie repose sur une souplesse de paramétrage, d’adaptabilité à tous les secteurs d’activité et à toute modification légale.
                  Toutes les composantes d’un bulletin de paie (Constantes, Rubriques, Variables ou Cotisations) sont entièrement paramétrables. 
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

export default PaieAbout;
