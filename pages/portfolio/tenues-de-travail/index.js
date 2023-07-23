"use client";
import React from "react";
import tenues_de_travail from "@/assets/img/tenues-de-travail/chambre.jpg";
import tenues_de_travail_1 from "@/assets/img/tenues-de-travail/chambre_1.jpg";
import tenues_de_travail_2 from "@/assets/img/tenues-de-travail/chambre_2.jpg";

import Image from "next/image";
import Gallery from "@/components/Gallery";
import Breadcrumbs from "@/components/Breadcrumbs";
const data = [
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "tenues_de_travail_1",
    image: tenues_de_travail_1,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "tenues_de_travail2",
    image: tenues_de_travail_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "tenues_de_travail 3",
    image: tenues_de_travail_1,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "tenues_de_travail 4",
    image: tenues_de_travail_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "tenues_de_travail 5",
    image: tenues_de_travail_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "tenues_de_travail 6",
    image: tenues_de_travail_1,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "tenues_de_travail 7",
    image: tenues_de_travail_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "tenues_de_travail 8",
    image: tenues_de_travail_1,
  },
];

function Chambres() {
  return (
    <>
      <Breadcrumbs
        title="Impression"
        subtitle="Tenues de travail et de t-shirts personnalisés"
      />
      <section id="product" className="product">
        <div className="container" data-aos="fade-up">
          <div className="row g-5">
            <div className="col-lg-7">
              <article className="product-details">
                <div className="content">
                  <h3>Tenues de travail et de t-shirts personnalisés</h3>
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
