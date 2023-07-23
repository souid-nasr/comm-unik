"use client";
import React from "react";
import papiers_peints from "@/assets/img/papiers-peints/porte.jpg";

import Image from "next/image";
import Gallery from "@/components/Gallery";
import Breadcrumbs from "@/components/Breadcrumbs";
const data = [
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "papiers_peints1",
    image: papiers_peints,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "papiers_peints2",
    image: papiers_peints,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "papiers_peints3",
    image: papiers_peints,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "papiers_peints4",
    image: papiers_peints,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "papiers_peints5",
    image: papiers_peints,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "papiers_peints6",
    image: papiers_peints,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "papiers_peints7",
    image: papiers_peints,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "papiers_peints8",
    image: papiers_peints,
  },
];

function porte() {
  return (
    <>
      <Breadcrumbs title="Impresion" subtitle="Papier peint & tableaux" />
      <section id="product" className="product">
        <div className="container" data-aos="fade-up">
          <div className="row g-5">
            <div className="col-lg-7">
              <article className="product-details">
                <div className="content">
                  <h3> Papier peint & tableaux</h3>
                  <p>
                    Comunik offre également des services de tirage de papier
                    peint personnalisé et de création de tableaux uniques.
                  </p>
                  <p>
                    Le tirage de papier peint personnalisé permet de transformer
                    vos murs en véritables œuvres d’art. Que ce soit pour votre
                    espace de travail, votre domicile ou tout autre lieu,
                    Comunik peut imprimer des motifs, des images ou des designs
                    personnalisés sur du papier peint de haute qualité. Cela
                    vous permet de créer une atmosphère unique et de mettre en
                    valeur votre style et votre créativité.
                  </p>
                  <p>
                    En ce qui concerne les tableaux, Comunik propose des
                    créations artistiques uniques qui ajoutent une touche
                    distinctive à votre espace. Leurs tableaux sont réalisés
                    avec des matériaux de qualité et sont disponibles dans une
                    variété de styles, de tailles et de finitions. Que vous
                    recherchiez des tableaux abstraits, des paysages, des
                    portraits ou d’autres types d’art, Comunik peut vous aider à
                    trouver le tableau parfait pour compléter votre décoration
                    intérieure.
                  </p>

                  <p>
                    Avec les services de tirage de papier peint personnalisé et
                    de création de tableaux de Comunik, vous pouvez transformer
                    votre espace en un lieu unique et inspirant, reflétant votre
                    style personnel et vos goûts artistiques.
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
