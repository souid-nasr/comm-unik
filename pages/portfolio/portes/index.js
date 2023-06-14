"use client";
import React from "react";
import porte_0 from "@/assets/img/porte/porte.jpg";
import porte_1 from "@/assets/img/porte/porte_1.jpg";
import porte_2 from "@/assets/img/porte/porte_2.jpg";

import Image from "next/image";
import Gallery from "@/components/Gallery";
import Breadcrumbs from "@/components/Breadcrumbs";
const data = [
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "porte 1",
    image: porte_1,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "porte 2",
    image: porte_0,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "porte 3",
    image: porte_1,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "porte 4",
    image: porte_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "porte 5",
    image: porte_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "porte 6",
    image: porte_0,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "porte 7",
    image: porte_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "porte 8",
    image: porte_1,
  },
];

function porte() {
  return (
    <>
      <Breadcrumbs
        title="Portes"
        subtitle="L’accompagnement et le conseil pour un projet qui vous ressemble .."
      />
      <section id="product" className="product">
        <div className="container" data-aos="fade-up">
          <div className="row g-5">
            <div className="col-lg-7">
              <article className="product-details">
                <div className="content">

                  <p>
                    Spécialiste de l’aménagement intérieur sur mesure depuis
                    sept ans, nous vous accompagnerons à la réalisation de votre
                    projet.
                  </p>

                  <blockquote>
                    <p>
                      L’accompagnement et le conseil pour un projet qui vous
                      ressemble{" "}
                    </p>
                  </blockquote>

                  <p>
                    Grâce à nos aménagements intérieurs sur mesure, nous aurons
                    la capacité de nous adapter à une multitude de contraintes
                    techniques. Une grande possibilité de personnalisation dans
                    les profils par leur couleur ou leur largeur permet de
                    réaliser des verrières avec des traverses pour donner un
                    style plus ou moins déstructuré.
                  </p>

                  <h3> SOUS-ESCALIER SUR MESURE</h3>
                  <p>
                    Les portes en fonction de la pièce où ils se trouvent
                    peuvent avoir plusieurs fonctions : fonction purement
                    pratique, fonction purement esthétique, fonction pratique et
                    esthétique.
                  </p>
                  <p>
                    Nos produits sur mesure vous permettront d’optimiser et de
                    décorer l’espace disponible.
                  </p>
                  <Image quality={100} src={porte_0} className="img-fluid" alt="" />

                  <h3>LE SUR MESURE</h3>
                  <p>
                    Deux points importants pour l’aménagement d’un porte,
                    l’optimisation et la praticité. C’est pourquoi nos produits
                    sont sur mesure pour s’adapter à vos dimensions: hauteur,
                    largeur,espaces spécifiques, nous nous adapterons pour vous
                    proposer un aménagement optimal.
                  </p>
                  <h3>PORTES DE PIÈCES</h3>
                  <p>
                    Nous vous proposerons une multitude de compositions pour la
                    réalisation de l&#39;aménagement d&#39;un porte pour
                    répondre à vos attentes grâce à un grand nombre de coloris,
                    de matières disponibles.
                  </p>
                  <h3>LE MÉTRÉ ET LA POSE</h3>
                  <p>
                    Depuis la création d’Unik Espace, nous travaillons avec des
                    poseurs menuisiers qualifiés afin d’assurer un service de
                    qualité de la prise en charge du projet jusqu’à la
                    réalisation. C’est pourquoi, nous nous déplaçons pour
                    effectuer un métré avant le lancement en fabrication.{" "}
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

export default porte;
