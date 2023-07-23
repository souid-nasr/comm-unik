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
        subtitle="Aménagement professionnel, restaurant et salon de thés"
      />
      <section id="product" className="product">
        <div className="container" data-aos="fade-up">
          <div className="row g-5">
            <div className="col-lg-7">
              <article className="product-details">
                <div className="content">
                  <h3>
                    Aménagement professionnel, restaurant et salon de thés
                  </h3>
                  <p>
                    Comunik offre des services d’aménagement d’espaces
                    professionnels, y compris les restaurants et les salons de
                    thé. Leur équipe de designers expérimentés comprend les
                    spécificités de ces environnements et crée des concepts
                    uniques qui allient esthétique, fonctionnalité et ambiance
                    pour offrir une expérience mémorable aux clients.
                  </p>
                  <p>
                    Lorsqu’il s’agit d’aménager un espace professionnel, qu’il
                    s’agisse d’un bureau, d’un restaurant ou d’un salon de thé,
                    Comunik prend en compte les besoins spécifiques de chaque
                    client. Leur approche personnalisée commence par une analyse
                    approfondie de l’espace, de son utilisation prévue et des
                    exigences opérationnelles. Ils travaillent ensuite en
                    étroite collaboration avec vous pour créer un design sur
                    mesure qui reflète l’identité de votre entreprise ou de
                    votre établissement et qui répond à vos objectifs.
                  </p>
                  <p>
                    Comunik propose également des solutions d’optimisation de
                    l’espace, en maximisant l’utilisation de chaque mètre carré
                    disponible. Que ce soit pour des espaces de travail
                    collaboratif, des zones de détente ou des espaces de
                    réception, ils créent des environnements fonctionnels et
                    esthétiques qui répondent aux besoins spécifiques de votre
                    activité.
                  </p>
                  <p>
                    En choisissant Comunik pour l’aménagement de votre espace
                    professionnel, restaurant ou salon de thé, vous bénéficiez
                    de leur expertise en matière de conception, de sélection de
                    matériaux de qualité et d’attention aux détails. Leur
                    objectif est de créer des espaces uniques qui impressionnent
                    vos clients, améliorent l’expérience utilisateur et
                    renforcent votre marque.
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
