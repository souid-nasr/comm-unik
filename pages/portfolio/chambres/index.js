"use client";
import React from "react";
import chambre from "@/assets/img/chambre/chambre.jpg";
import chambre_1 from "@/assets/img/chambre/chambre_1.jpg";
import chambre_2 from "@/assets/img/chambre/chambre_2.jpg";

import Image from "next/image";
import Gallery from "@/components/Gallery";
import Breadcrumbs from "@/components/Breadcrumbs";
const data = [
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "chambre 1",
    image: chambre_1,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "chambre 2",
    image: chambre_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "chambre 3",
    image: chambre_1,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "chambre 4",
    image: chambre_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "chambre 5",
    image: chambre_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "chambre 6",
    image: chambre_1,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "chambre 7",
    image: chambre_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "chambre 8",
    image: chambre_1,
  },
];

function Chambres() {
  return (
    <>
      <Breadcrumbs
        title="Nos chambres d'enfants"
        subtitle="La solution parfaite pour le confort du couchage de vos enfants .."
      />
      <section id="product" className="product">
        <div className="container" data-aos="fade-up">
          <div className="row g-5">
            <div className="col-lg-7">
              <article className="product-details">
                <div className="content">
                  <p>
                    Le confort du couchage de vos enfants est optimal car nos
                    produits proposent un vrai sommier et un matelas de qualité.
                    De nombreuses compositions sont possibles autour du lit
                    relevable afin de venir l’intégrer au mieux dans l’espace
                    disponible. Entouré par une composition bibliothèque ou un
                    bureau.
                  </p>
                  

                  <blockquote>
                    <p>
                    Nos solutions sur mesures permettent une optimisation de n’importe quel espace
                    </p>

                  </blockquote>
                  <Image quality={100} src={chambre} className="img-fluid" alt="" />

                  <h3>LE SUR MESURE</h3>
                  <p>
                  L’optimisation dans les espaces de rangement est primordiale. Les lits relevables sont sur mesure pour s’adapter à vos dimensions: hauteur, largeur , profondeur et espaces spécifiques.Pas d’inquiétude, nous nous adapterons pour vous proposer un aménagement optimal.
                  </p>
                  <h3>LA PERSONNALISATION</h3>
                  <p>
                  Un grand nombre de coloris et de matières sont disponibles afin de créer un aménagement autour du lit relevable qui vous correspond.
                  </p>
                  <h3>QUALITÉ DE FINITION</h3>
                  <p>
                  Toute l’armature du lit relevable est travaillée afin de vous permettre une utilisation quotidienne facile et pratique.                  </p>
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

export default Chambres;
