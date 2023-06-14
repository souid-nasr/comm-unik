"use client";
import React from "react";
import habillage_0 from "@/assets/img/habillage/habillage.jpg";
import habillage_1 from "@/assets/img/habillage/habillage_1.jpg";
import habillage_2 from "@/assets/img/habillage/habillage_1.jpg";

import Image from "next/image";
import Gallery from "@/components/Gallery";
import Breadcrumbs from "@/components/Breadcrumbs";
const data = [
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "habillage 1",
    image: habillage_1,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "habillage 2",
    image: habillage_0,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "habillage 3",
    image: habillage_1,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "habillage 4",
    image: habillage_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "habillage 5",
    image: habillage_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "habillage 6",
    image: habillage_0,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "habillage 7",
    image: habillage_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "habillage 8",
    image: habillage_1,
  },
];

function Habillages() {
  return (
    <>
      <Breadcrumbs
        title="Habillages"
        subtitle="Les aménagements intérieurs sur mesure .."
      />
      <section id="product" className="product">
        <div className="container" data-aos="fade-up">
          <div className="row g-5">
            <div className="col-lg-7">
              <article className="product-details">

                <div className="content">
                  <p>
                    L’aménagement des habillages est la solution par
                    excellence pour gagner de la place. Nos produits permettent
                    un alignement parfait avec les pentes d’ escaliers ou des
                    combles pour un rendu parfait.
                  </p>

                  <p>
                    Spécialiste de l’aménagement intérieur sur mesure depuis sept ans, nous vous accompagnerons à la
                    réalisation de votre projet.
                  </p>

                  <blockquote>
                    <p>
                      S’adapter aux contraintes est la force de notre métier
                    </p>
                  </blockquote>

                  <p>
                    Grâce à nos aménagements intérieurs sur mesure, nous aurons
                    la capacité de nous adapter à une multitude de contraintes
                    techniques. Notre objectif est de réaliser un aménagement
                    sous-escalier qui vous correspondra en respectant vos
                    attentes et vos besoins tout en s’adaptant à l’espace
                    disponible.
                  </p>

                  <h3> SOUS-ESCALIER SUR MESURE</h3>
                  <p>
                    Les habillages en fonction de la pièce où ils se
                    trouvent peuvent avoir plusieurs fonctions : fonction
                    purement pratique, fonction purement esthétique, fonction
                    pratique et esthétique.
                  </p>
                  <p>
                    Nos produits sur mesure vous permettront d’optimiser et de
                    décorer l’espace disponible.
                  </p>
                  <Image quality={100} src={habillage_0} className="img-fluid" alt="" />

                  <h3>LE SUR MESURE</h3>
                  <p>
                    Deux points importants pour l’aménagement d’un
                    sous-escalier, l’optimisation et la praticité. C’est
                    pourquoi nos produits sont sur mesure pour s’adapter à vos
                    dimensions: hauteur, largeur, profondeur, espaces
                    spécifiques, nous nous adapterons pour vous proposer un
                    aménagement optimal.
                  </p>
                  <h3>LA PERSONNALISATION</h3>
                  <p>
                    Nous vous proposerons une multitude de compositions pour la
                    réalisation de l&#39;aménagement d&#39;un sous-escalier ou d
                    une sous-pente pour répondre à vos attentes grâce à un grand
                    nombre de coloris, de matières disponibles.
                  </p>
                  <h3>LE MÉTRÉ ET LA POSE</h3>
                  <p>
                    L’importance de faire appel à un professionnel pour ce type
                    de projet est primordiale. Depuis la création d’Agencements
                    MG, nous travaillons avec des poseurs menuisiers afin
                    d’assurer un service de qualité qui va de la prise en charge
                    du projet jusqu’à la réalisation. C’est pourquoi, une fois
                    que votre projet de sous-escalier ou de sous-pente est
                    concrétisé, nous nous déplaçons pour effectuer un métré
                    avant le lancement en fabrication.{" "}
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

export default Habillages;
