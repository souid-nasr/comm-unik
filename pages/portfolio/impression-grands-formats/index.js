"use client";
import React from "react";
import impression_grands_formats from "@/assets/img/impression-grands-formats/c1.jpg";
import impression_grands_formats_1 from "@/assets/img/impression-grands-formats/c2.jpg";
import impression_grands_formats_2 from "@/assets/img/impression-grands-formats/c4.jpg";
import impression_grands_formats_3 from "@/assets/img/impression-grands-formats/c5.jpg";
import impression_grands_formats_4 from "@/assets/img/impression-grands-formats/c6.jpg";
import impression_grands_formats_5 from "@/assets/img/impression-grands-formats/c7.jpg";
import impression_grands_formats_6 from "@/assets/img/impression-grands-formats/c8.jpg";
import impression_grands_formats_7 from "@/assets/img/impression-grands-formats/c3.jpg";

import Image from "next/image";
import Gallery from "@/components/Gallery";
import Breadcrumbs from "@/components/Breadcrumbs";
const data = [
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "impression_grands_formats_1",
    image: impression_grands_formats
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "impression_grands_formats_2",
    image: impression_grands_formats_1,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "impression_grands_formats_3",
    image: impression_grands_formats_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "impression_grands_formats_4",
    image: impression_grands_formats_3,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "impression_grands_formats_5",
    image: impression_grands_formats_3,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "impression_grands_formats_6",
    image: impression_grands_formats_4,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "impression_grands_formats_7",
    image: impression_grands_formats_5,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "impression_grands_formats_8",
    image: impression_grands_formats_6,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "impression_grands_formats_8",
    image: impression_grands_formats_7,
  },
];

function Impression_grands_formats() {
  return (
    <>
      <Breadcrumbs title="Impression" subtitle="Impression grands formats" />
      <section id="product" className="product">
        <div className="container" data-aos="fade-up">
          <div className="row g-5">
            <div className="col-lg-7">
              <article className="product-details">
                <div className="content">
                  <p>
                    Comunik offre un service d&#39;impression grand format de
                    qualité exceptionnelle pour répondre à tous vos besoins en
                    communication visuelle. Que vous souhaitiez réaliser des
                    affiches percutantes, des bannières attrayantes, des
                    panneaux publicitaires impactants ou des enseignes
                    imposantes, Comunik est là pour vous accompagner.
                  </p>
                  <p>
                    Grâce à des technologies d&#39;impression de pointe et à une
                    équipe expérimentée, Comunik garantit des résultats de haute
                    qualité. Leurs équipements de pointe permettent de produire
                    des impressions nettes, aux couleurs vives et aux détails
                    précis. Que vous ayez besoin d&#39;une petite quantité
                    d&#39;impressions ou de volumes importants, Comunik
                    s&#39;adapte à vos besoins et vous assure des résultats
                    impeccables.
                  </p>
                  <p>
                    En choisissant le service d&#39;impression grand format de
                    Comunik, vous bénéficiez d&#39;une solution complète, allant
                    de la conception à la réalisation. Leur expertise, leur
                    engagement envers la qualité et leur service client attentif
                    font de Comunik le partenaire idéal pour donner vie à vos
                    idées et vous démarquer visuellement.
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

export default Impression_grands_formats;
