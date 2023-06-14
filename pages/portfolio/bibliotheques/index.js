"use client";
import React from "react";
import bibliotheque_1 from "@/assets/img/bibliotheque/bibliotheque_1.jpg";
import bibliotheque_2 from "@/assets/img/bibliotheque/bibliotheque_2.jpg";

import Image from "next/image";
import Gallery from "@/components/Gallery";
import Breadcrumbs from "@/components/Breadcrumbs";
const data = [
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "bibliotheque 1",
    image: bibliotheque_1,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "bibliotheque 2",
    image: bibliotheque_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "bibliotheque 3",
    image: bibliotheque_1,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "bibliotheque 4",
    image: bibliotheque_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "bibliotheque 5",
    image: bibliotheque_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "bibliotheque 6",
    image: bibliotheque_1,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "bibliotheque 7",
    image: bibliotheque_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "bibliotheque 8",
    image: bibliotheque_1,
  },
];

function Bibliotheques() {
  return (
    <>
      <Breadcrumbs
        title="Nos bibliotheques"
        subtitle="Trouver le style de votre bibliotheque .."
      />
      <section id="product" className="product">
        <div className="container" data-aos="fade-up">
          <div className="row g-5">
            <div className="col-lg-7">
              <article className="product-details">


                <div className="content">


                  <blockquote>
                    <p>
                      Qu&#39;est-ce qu&#39;une bibliotheque aménagée ? C&#39;est du rangement
                      bien sûr ! mais avant tout de l&#39;ergonomie et de la
                      convivialité : car ne l&#39;oublions pas, aujourd&#39;hui
                      quasiment toutes les bibliotheques sont ouvertes et forment un
                      lieu de vie avec le séjour.
                    </p>
                    <p>
                      Il est donc primordial de concilier harmonieusement
                      l&#39;espace de travail et de détente. C&#39;est à cela que nous
                      sommes aussi attentifs.
                    </p>
                  </blockquote>


                  <h3>
                    {" "}
                    Un cuisiniste, tel que nous le concevons, doit avant tout
                    prendre le temps de vous connaître.
                  </h3>
                  <p>
                    Vous écoutez, ce qui doit nous permettre non pas de « vous
                    proposer nos bibliotheques » mais surtout de réaliser VOTRE
                    bibliotheque.
                  </p>
                  <p>
                    Prenons le temps et discutons-en ensemble… qu&#39;importe le
                    style pourvu qu&#39;on ait l&#39;ivresse !
                  </p>
                  <Image quality={100} src={bibliotheque_1} className="img-fluid" alt="" />

                  <h3>LE CHOIX</h3>
                  <p>
                    Suivant vos recherches en terme de budget comme en terme de
                    produit, notre statut indépendant nous permet de vous
                    orienter vers les fabricants que nous avons choisi pour vous
                    afin de nous adapter à de nombreuses et différentes
                    demandes.
                  </p>   
                  <h3>LES MATIÈRES</h3>
                  <p>
                  Laques mat, brillante ou poudrée,en céramique, béton, verre, nous pourrons vous étonner avec des façades peu courantes… ou classique en bois massif par exemple. Les façades en matériaux recyclés PET proposent des coloris actuels et tendance.
                  </p>
                  <p>
                  Plan de travail suivant les exigences : la céramique aujourd&#39;hui remporte tous les suffrages : résistance à la chaleur et aux rayures avec de nombreux décors possible (même imitation bois !). La pierre naturelle – le granit – ou même le bois en lamellé massif donneront un cachet plus authentique. Et bien sûr le stratifié, qui reste un excellent rapport qualité – prix avec de nombreux décors et effets de matière.
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
