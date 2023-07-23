"use client";
import React from "react";
import enseignes_0 from "@/assets/img/enseignes/separation.jpg";
import enseignes_1 from "@/assets/img/enseignes/separation_1.jpg";
import enseignes_2 from "@/assets/img/enseignes/separation_2.jpg";

import Image from "next/image";
import Gallery from "@/components/Gallery";
import Breadcrumbs from "@/components/Breadcrumbs";
const data = [
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "enseignes 1",
    image: enseignes_1,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "enseignes 2",
    image: enseignes_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "enseignes 3",
    image: enseignes_1,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "enseignes 4",
    image: enseignes_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "enseignes 5",
    image: enseignes_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "enseignes 6",
    image: enseignes_1,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "enseignes 7",
    image: enseignes_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "enseignes 8",
    image: enseignes_1,
  },
];

function SousEsacaliers() {
  return (
    <>
      <Breadcrumbs
        title="AMENAGEMENT INTERIEUR ET EXTERIEUR"
        subtitle="Les enseignes en lettres boîtiers"
      />
      <section id="product" className="product">
        <div className="container" data-aos="fade-up">
          <div className="row g-5">
            <div className="col-lg-7">
              <article className="product-details">
                <div className="content">
                  <h3>Enseignes en lettres boîtiers</h3>
                  <p>
                    Elles sont des solutions élégantes et personnalisables pour
                    afficher le nom et le logo de votre entreprise. Comunik
                    utilise des matériaux de haute qualité et des techniques de
                    fabrication avancées pour produire des lettres boîtiers aux
                    finitions impeccables. Vous pouvez choisir parmi une large
                    gamme de styles, de tailles et de couleurs pour créer une
                    enseigne qui correspond parfaitement à l’identité visuelle
                    de votre entreprise.
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

export default SousEsacaliers;
