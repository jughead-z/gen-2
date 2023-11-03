import { Accordion } from "react-bootstrap";
import ThumbFaq from "../../../public/assets/imgs/thumb/faqimg.jpg";
import Image from "next/image";

const ComptaFaq = () => {
  return (
    <>
      <section className="faq__area">
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
                        Personnel
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <ul>
                            <li>+ Administration du Personnel</li>
                            <li>+ Gestion des contrats de travail avec rédaction et historisation</li>
                            <li>+ Consultation des bulletins de paie</li>
                            <li>+ Gestion des Prêts et crédits logement</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingTwo"
                      >
                        Gestion de la Paie
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                      <ul>
                            <li>+ Souplesse du paramétrage avancée des rubriques de la paie et possibilité d’adaptation à tout secteur d’activité</li>
                            <li>+ Conformité réglementaire avec bases et plafonds</li>
                            <li>+ Génération en masse des bulletins de salaire avec visualisation avant impression</li>
                            <li>+ Possibilité d’importation des variables de la paie et attachement avec pointeuse</li>
                            <li>+ Paie inversée à partir du montant net stipulé dans le contrat du salarié</li>
                            <li>+ Possibilité d’ajout de nouvelles rubriques de paie pendant la préparation du bulletin</li>
                            <li>+ Assistant processus Solde de tout compte</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingThree"
                      >
                        Editions & déclarations
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                        Personnalisation des bulletins de paie, et états des cotisations
                        </p>
                        <ul>
                            <li>+ Edition du livre de paie avec filtres dynamiques</li>
                            <li>+ Gestion des déclarations sociales « CNSS, CIMR, Mutuelle » et télé-déclaration</li>
                            <li>+ Etat des Traitements & Salaires avec génération du fichier EDI du Simpl-IR</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3" className="accordion-item">
                      <Accordion.Header
                        className="accordion-header"
                        id="headingFour"
                      >
                        Autres fonctionnalités
                      </Accordion.Header>
                      <Accordion.Body className="accordion-body">
                        <p>
                        Multi-sociétés, multi-établissements et multi-utilisateurs
                        </p>

                        <ul>
                            <li>+ Gestion des acomptes et prêts accordés au Personnel</li>
                            <li>+ Etat des virements bancaires</li>
                            <li>+ Démarrage en cours d’année par la possibilité de saisir les cumuls annuels des bulletins dans la fiche fiscale de chaque salarié.</li>
                            <li>+ Génération automatisée des documents administratifs RH (contrats de travail, certificat de travail, attestation de salaire.)</li>
                        </ul>

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
