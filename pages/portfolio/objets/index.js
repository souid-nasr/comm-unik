"use client";
import React from "react";
import objets_0 from "@/assets/img/objets/habillage.jpg";
import objets_1 from "@/assets/img/objets/habillage_1.jpg";
import objets_2 from "@/assets/img/objets/habillage_1.jpg";

import Image from "next/image";
import Gallery from "@/components/Gallery";
import Breadcrumbs from "@/components/Breadcrumbs";
const data = [
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "objets 1",
    image: objets_1,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "objets 2",
    image: objets_0,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "objets 3",
    image: objets_1,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "objets 4",
    image: objets_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "objets 5",
    image: objets_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "objets 6",
    image: objets_0,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "objets 7",
    image: objets_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "objets 8",
    image: objets_1,
  },
];

function Habillages() {
  return (
    <>
      <Breadcrumbs title="Impression" subtitle="Objets" />
      <section id="product" className="product">
        <div className="container" data-aos="fade-up">
          <div className="row g-5">
            <div className="col-lg-7">
              <article className="product-details">
                <div className="content">
                  <h3> Objets</h3>
                  <p>
                    Comunik propose également des cadeaux de fin d’année pour
                    les entreprises. Ils offrent une gamme variée d’articles
                    personnalisables tels que des agendas, des calendriers, des
                    porte-clés, des stylos et bien plus encore. Ces cadeaux
                    personnalisés constituent une excellente façon de remercier
                    vos clients, vos partenaires commerciaux et vos employés
                    pour leur fidélité et leur soutien tout au long de l’année.
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
