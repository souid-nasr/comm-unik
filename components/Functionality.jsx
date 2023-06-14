import React from "react";
import fuctionality from "../assets/img/about.jpg";
import Image from "next/image";
function Functionality() {
  return (
    <div>
      {" "}
      <section id="fuctionality " className="fuctionality ">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <span>ESTHÉTISME & FONCTIONNALITÉ</span>
            <h2>ESTHÉTISME & FONCTIONNALITÉ</h2>{" "}
            <p>
              L&#39;optimisation dans les espaces de rangement est primordiale.
              C&#39;est pourquoi nos produits sont sur mesure pour s&#39;adapter à vos
              dimensions. Hauteur, largeur, profondeur.
            </p>
            <p>
              Espaces spécifiques, pas d&#39;inquiétude, nous nous adaptererons afin
              de vous proposer un aménagement optimal.
            </p>
          </div>

          <div
            className="row g-4 g-lg-5"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="col-lg-5">
              <div className="fuctionality -img">
                <Image quality={100} src={fuctionality} className="img-fluid" alt="" />
              </div>
            </div>

            <div className="col-lg-7">
              <div className="tab-content">
                <div className="tab-pane fade show active" id="tab1">
                  <p className="fst-italic">
                    Un grand nombre de coloris et de matières sont disponibles
                    afin de concevoir ensemble l&#39;aménagement intérieur ou la
                    cuisine qui vous correspond. Des compositions et modèles
                    quasi infinies pour une réalisation à votre image.
                  </p>

                  <div className="d-flex align-items-center mt-4">
                    <i className="bi bi-check2"></i>
                    <h4>QUALITÉ</h4>
                  </div>
                  <p>
                    Sélection de fournisseurs d&#39;après leur créativité et la
                    qualité de leurs produits que nous avons développés selon la
                    qualité et la diversité notre offre.
                  </p>

                  <div className="d-flex align-items-center mt-4">
                    <i className="bi bi-check2"></i>
                    <h4>NOTRE DÉMARCHE..</h4>
                  </div>
                  <p>
                    Nous souhaitons entretenir avec nos clients une relation
                    fondée sur l&#39;échange, le conseil et la confiance, en dehors
                    toute pratique commerciale agressive.
                  </p>

                  <div className="d-flex align-items-center mt-4">
                    <i className="bi bi-check2"></i>
                    <h4>UN SAVOIR FAIRE..</h4>
                  </div>
                  <p>
                    Plus de 07 ans d&#39;expériences au service de nos clients.
                    Ainsi qu&#39;une collaboration pérenne avec nos menuisiers
                    installateurs nous assure un service réactif et de qualité.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Functionality;
