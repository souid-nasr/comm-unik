import React from "react";
import impression_grands_formats from "../assets/img/impression-grands-formats/c1.jpg";
import carterie from "../assets/img/carterie/d1.jpg";
import support_publicitaire from "../assets/img/support-publicitaire/bibliotheque_1.jpg";
import tenues_de_travail from "../assets/img/tenues-de-travail/chambre.jpg";
import objets from "../assets/img/objets/habillage.jpg";
import papiers_peints from "../assets/img/papiers-peints/porte.jpg";
import enseignes from "../assets/img/enseignes/separation.jpg";
import habillage from "../assets/img/habillage/sousescalier.jpg";
import Link from "next/link";
import Image from "next/image";
import { IoFingerPrintOutline } from "react-icons/io5";

function Products() {
  const data = [
    {
      _id: "id" + Math.random().toString(16).slice(2),
      url: impression_grands_formats,
      title: "Impression grands formats",
      path: "/portfolio/impression-grands-formats",
    },
    {
      _id: "id" + Math.random().toString(16).slice(2),
      url: carterie,
      title: "Carterie",
      path: "/portfolio/carterie",
    },
    {
      _id: "id" + Math.random().toString(16).slice(2),
      url: support_publicitaire,
      title: "Supports publicitaires",
      path: "/portfolio/support-publicitaire",
    },
    {
      _id: "id" + Math.random().toString(16).slice(2),
      url: tenues_de_travail,
      title: "Tenues de travail",
      path: "/portfolio/tenues-de-travail",
    },
    {
      _id: "id" + Math.random().toString(16).slice(2),
      url: objets,
      title: "Objets",
      path: "/portfolio/objets",
    },
    {
      _id: "id" + Math.random().toString(16).slice(2),
      url: papiers_peints,
      title: "Papiers peints & tableaux",
      path: "/portfolio/papiers-peints",
    },
    {
      _id: "id" + Math.random().toString(16).slice(2),
      url: enseignes,
      title: "Enseignes en lettres boîtiers",
      path: "/portfolio/enseignes-lettres-boitiers",
    },
    {
      _id: "id" + Math.random().toString(16).slice(2),
      url: enseignes,
      title: "Enseignes lumineuses",
      path: "/portfolio/enseignes-lumineuses",
    },
    {
      _id: "id" + Math.random().toString(16).slice(2),
      url: habillage,
      title: "Habillage façade",
      path: "/portfolio/habillage-facade",
    },
    {
      _id: "id" + Math.random().toString(16).slice(2),
      url: enseignes,
      title: "Aménagements professionnels",
      path: "/portfolio/amenagement-pro",
    },

  ];
  return (
    <>
      <section id="products" className="products">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <span>DÉCOUVREZ NOTRE SAVOIR-FAIRE</span>
            <h2>DÉCOUVREZ NOTRE SAVOIR-FAIRE</h2>

            <p>
              Chez Com Unik chaque client est UNIQUE. Notre
              équipe s’investit à fond avec vous pour bien comprendre vos
              besoins et déterminer les traits de communication les plus
              efficaces.
            </p>
          </div>

          <div className="row gy-3">
            {data.map((el) => {
              return (
                <div
                  className="col-xl-4 col-md-6"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  key={el._id}
                >
                  <div className="product-item">
                    <div className="img">
                      <Image
                        quality={100}
                        src={el.url}
                        className="img-fluid"
                        alt="cuisine"
                      />
                    </div>
                    <div className="details position-relative">
                      <div className="icon">
                        <IoFingerPrintOutline />
                      </div>
                      <Link
                        href={el.path}
                        style={{ textDecoration: "none" }}
                        className="stretched-link"
                      >
                        <h3>{el.title}</h3>
                      </Link>
                      {/* <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis.</p> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
