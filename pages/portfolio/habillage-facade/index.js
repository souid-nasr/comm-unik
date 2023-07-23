"use client";
import React from "react";
import habillage from "@/assets/img/habillage/sousescalier.jpg";


import Image from "next/image";
import Gallery from "@/components/Gallery";
import Breadcrumbs from "@/components/Breadcrumbs";
const data = [
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "habillage",
    image: habillage,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "habillage",
    image: habillage,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "habillage",
    image: habillage,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "habillage 4",
    image: habillage,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "habillage 5",
    image: habillage,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "habillage 6",
    image: habillage,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "habillage 7",
    image: habillage,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "habillage 8",
    image: habillage,
  },
];

function Chambres() {
  return (
    <>
      <Breadcrumbs
        title="AMENAGEMENT INTERIEUR ET EXTERIEUR"
        subtitle="Habillage façade (alucobond / bois)"
      />
      <section id="product" className="product">
        <div className="container" data-aos="fade-up">
          <div className="row g-5">
            <div className="col-lg-7">
              <article className="product-details">
                <div className="content">
                  <h3>Habillage façade (alucobond / bois)</h3>
                  <p>
                    Comunik propose des services d’impression de tenues de
                    travail et de t-shirts personnalisés pour répondre à vos
                    besoins en matière de branding et de cohésion d’équipe. Que
                    vous recherchiez des uniformes professionnels pour votre
                    entreprise ou des t-shirts personnalisés pour des événements
                    spéciaux, Comunik peut vous aider à créer des tenues uniques
                    qui reflètent votre identité et renforcent votre image de
                    marque.{" "}
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

export default Chambres;