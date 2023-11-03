import { Accordion } from "react-bootstrap";
import ThumbFaq from "../../../public/assets/imgs/thumb/application-femme.jpg";
import Image from "next/image";

const ComptaFaq = () => {
  return (
    <>
      <section className="faq__area pt-130">
        <div className="container g-0 line pb-140">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="faq__img">
                <Image
                  priority
                  style={{ width: "auto", height: "auto" }}
                  src={ThumbFaq}
                  alt="FAQ Image"
                  data-speed="auto"
                />
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
              <div className="faq__content">
                <h2 className="faq__title title-anim">
                 Modules principaux 
                </h2>

                <div className="faq__list">
                  <Accordion
                    defaultActiveKey="0"
                    className="accordion"
                    id="accordionExample"
                  >
                    <Accordion.Item eventKey="0" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingOne"
                      >
                        Traitement de documents
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                        Grâce à son interface pratique et intuitive de traitement de documents, 
                        GENERAFI COMPTA vous apporte une solution de facilitation pour l’enregistrement de vos factures de ventes, d’achats ainsi que vos règlements.
                         Le pièces comptables y sont ensuite générées avec les documents correspondants en attachement.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingTwo"
                      >
                        Saisie Kilométrique
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          {
                            "Noyau dur de la solution, l’interface de la tenue comptable journalière constitue un environnement de travail complet, intuitif et performant. Les propositions automatiques de comptes, de contreparties, de masques de saisie ainsi que les verrous protecteurs de saisie vous apportent un support pratique dans la saisie de vos pièces comptables."
                          }
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingThree"
                      >
                        Pistes d’audit
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                          Depuis votre Balance Générale (ou Auxiliaire), 
                          remontez jusqu’à la source de votre saisie comptable : GénéraFi Compta vous permet de suivre votre piste d’audit en passant par l’extrait de compte adéquat,
                          la pièce comptable source et enfin la pièce-jointe au format PDF ou image source de la saisie initiale.
                          Justifiez vos chiffres en un clic et ne perdez plus le fil !
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingFour"
                      >
                        Traitement de la TVA
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                        GENERAFI COMPTA comprend un module de traitement de la TVA qui permet de générer automatiquement, 
                        sur la base de vos opérations comptables, l’état préparatoire de votre déclaration de TVA. 
                        Le système vous propose ensuite d’automatiser la comptabilisation et le lettrage de l’écriture comptable détaillée de la déclaration de la TVA.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="4" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingFive"
                      >
                        Relevé bancaire et Rapprochement automatisé
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                        GENERAFI COMPTA propose un assistant performant pour le rapprochement bancaire intégrant des fonctionnalités avancées d’import et d’agrégation de comptes bancaires.
                         Vous pouvez pointer vos mouvements bancaires ou laissez-vous guider les fonctionnalités innovantes de réconciliation bancaire de votre nouvel assistant.
                        </p>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ComptaFaq;
