"use client";
import React from "react";
import support_publicitaire_1 from "@/assets/img/support-publicitaire/bibliotheque_1.jpg";
import support_publicitaire_2 from "@/assets/img/support-publicitaire/bibliotheque_2.jpg";

import Image from "next/image";
import Gallery from "@/components/Gallery";
import Breadcrumbs from "@/components/Breadcrumbs";
const data = [
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "support_publicitaire_1",
    image: support_publicitaire_1,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "support_publicitaire_2",
    image: support_publicitaire_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "support_publicitaire_3",
    image: support_publicitaire_1,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "support_publicitaire_4",
    image: support_publicitaire_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "support_publicitaire_5",
    image: support_publicitaire_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "support_publicitaire_6",
    image: support_publicitaire_1,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "support_publicitaire_7",
    image: support_publicitaire_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "support_publicitaire_8",
    image: support_publicitaire_1,
  },
];

function Bibliotheques() {
  return (
    <>
      <Breadcrumbs title="Impression" subtitle="Support publicitaire" />
      <section id="product" className="product">
        <div className="container" data-aos="fade-up">
          <div className="row g-5">
            <div className="col-lg-7">
              <article className="product-details">
                <div className="content">
                  <h3>Support publicitaire</h3>
                  <p>
                    Comunik est votre partenaire de confiance pour tous vos
                    besoins en supports publicitaires. Que vous souhaitiez
                    promouvoir un événement, lancer une campagne publicitaire ou
                    renforcer votre présence sur le marché, Comunik offre une
                    gamme complète de supports publicitaires de haute qualité
                    pour répondre à vos objectifs.
                  </p>
                  <p>
                    Parmi les supports publicitaires proposés par Comunik, vous
                    trouverez : le X-Banner, le flag, le totem, le roll-up et
                    l’affiche... Ces supports sont conçus pour attirer
                    l’attention et transmettre efficacement votre message
                    publicitaire. Que ce soit pour les salons professionnels,
                    les événements en extérieur ou les campagnes
                    promotionnelles, Comunik a les solutions adaptées pour vous
                    aider à maximiser votre visibilité et atteindre vos
                    objectifs de communication.
                  </p>
                  <p>
                    Si vous recherchez des supports publicitaires plus
                    interactifs, Comunik propose également des dépliants et des
                    brochures informatives. Ces supports imprimés sont parfaits
                    pour fournir des détails spécifiques sur vos produits,
                    services ou événements. Comunik assure une impression de
                    haute qualité avec des finitions soignées pour garantir un
                    rendu professionnel.
                  </p>
                </div>
              </article>
            </div>
            <div className="col-lg-5">
              <div className="sidebar">
                <div className="sidebar-item ">
                  <h3 className="sidebar-title">Galerie des photos</h3>
                </div>
                <Gallery data={data} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Bibliotheques;
