"use client";
import React from "react";
import carterie_1 from "@/assets/img/carterie/d1.jpg";
import carterie_2 from "@/assets/img/carterie/d3.jpg";
import carterie_3 from "@/assets/img/carterie/d4.jpg";
import carterie_4 from "@/assets/img/carterie/d5.jpg";
import carterie_5 from "@/assets/img/carterie/d6.jpg";

import Image from "next/image";
import Gallery from "@/components/Gallery";
import Breadcrumbs from "@/components/Breadcrumbs";
const data = [
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "carterie 1",
    image: carterie_1,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "carterie 2",
    image: carterie_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "carterie 3",
    image: carterie_3,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "carterie 4",
    image: carterie_4,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "carterie 5",
    image: carterie_5,
  },
];

function Dressings() {
  return (
    <>
      <Breadcrumbs title="Impression" subtitle="Carterie" />
      <section id="product" className="product">
        <div className="container" data-aos="fade-up">
          <div className="row g-5">
            <div className="col-lg-7">
              <article className="product-details">
                <h2 className="title">Carterie</h2>
                <div className="content">
                  <p>
                    Comunik propose également un service d’impression petit
                    format pour répondre à tous vos besoins en matière de
                    communication imprimée. Que ce soit pour des cartes de
                    visite professionnelles, des flyers promotionnels, des
                    brochures informatives ou des dépliants publicitaires,
                    Comunik met à votre disposition son expertise et ses
                    équipements de pointe pour produire des impressions de
                    qualité exceptionnelle.
                  </p>
                  <p>
                    Le service d’impression petit format de Comunik offre une
                    grande flexibilité en termes de quantités et de formats. Que
                    vous ayez besoin d’une petite quantité d’impressions pour
                    une campagne spécifique ou d’une grande quantité pour une
                    distribution plus étendue, Comunik s’adapte à vos exigences.
                    Leurs impressions petit format sont réalisées avec une
                    attention méticuleuse aux détails, garantissant une
                    reproduction fidèle des couleurs et des éléments graphiques.
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

export default Dressings;
