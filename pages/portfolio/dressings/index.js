"use client";
import React from "react";
import dressing from "@/assets/img/dressing/dressing_1280.jpg";
import dressing_1 from "@/assets/img/dressing/d1.jpg";
import dressing_2 from "@/assets/img/dressing/d3.jpg";
import dressing_3 from "@/assets/img/dressing/d4.jpg";
import dressing_4 from "@/assets/img/dressing/d5.jpg";
import dressing_5 from "@/assets/img/dressing/d6.jpg";

import Image from "next/image";
import Gallery from "@/components/Gallery";
import Breadcrumbs from "@/components/Breadcrumbs";
const data = [
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "dressing 1",
    image: dressing_1,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "dressing 2",
    image: dressing_2,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "dressing 3",
    image: dressing_3,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "dressing 4",
    image: dressing_4,
  },
  {
    _id: "id" + Math.random().toString(16).slice(2),
    title: "dressing 5",
    image: dressing_5,
  },
];

function Dressings() {
  return (
    <>
      <Breadcrumbs
        title="Dressings sur-mesure"
        subtitle="Des solutions personnalisées pour votre dressing .."
      />
      <section id="product" className="product">
        <div className="container" data-aos="fade-up">
          <div className="row g-5">
            <div className="col-lg-7">
              <article className="product-details">
                <h2 className="title">DRESSINGS SUR MESURE</h2>
                <div className="content">
                  <p>
                    Les dressings prennent une place de plus en plus importante
                    dans notre mode de vie et nos habitations. Le dressing sur
                    mesure ouvre les possibilités à un aménagement qui vous
                    correspond !
                  </p>

                  <p>
                    C’est l’espace dédié aux rangements de vos vêtements et
                    accessoires. Le dressing devient un espace apaisant où l’on
                    apprécie pour passer du temps. Chaque accessoire a sa place.
                    Chaussures, foulards, sacs à mains, bijoux, accessoires,
                    pourront être mis en avant dans votre dressing.
                  </p>
                  <p>
                    Choisir ses vêtements devient un vrai plaisir. La variété
                    des configurations (linéaire, en L, en U, etc.) et la
                    variété des finitions permettent de construire le projet
                    idéal, correspondant parfaitement à vos besoins et
                    s’adaptant parfaitement à la pièce qui lui est dédiée.{" "}
                  </p>
                  <blockquote>
                    <p>
                      L’accompagnement et le conseil pour un dressing à votre
                      image
                    </p>
                  </blockquote>
                  <Image quality={100} src={dressing} className="img-fluid" alt="" />
                  <p>
                    Le dressing est un espace dédié au rangement de vêtements.
                    Nous vous accompagnons dans votre réflexion afin d’optimiser
                    au maximum la place disponible.{" "}
                  </p>
                  <h3> UNE MULITITUDE DE CONFIGURATIONS</h3>
                  <p>
                    Le dressing doit vous permettre de disposer de la manière
                    dont vous le souhaitez. C’est pourquoi il est important de
                    prendre en compte tout ce que vous souhaitez ranger dans
                    votre dressing. En fonction de l’espace disponible, le
                    dressing peut prendre plusieurs formes : dressing en L, en
                    U, en linéaire, avec îlot.
                  </p>

                  <h3>LA PERSONNALISATION</h3>
                  <p>
                    Le dressing prend de plus en plus d’espace et d’importance
                    dans les habitudes de vie. Il est important d’avoir un
                    dressing qui vous correspond, c’est pourquoi nous mettons à
                    votre disposition une large gamme de coloris et de matières.
                  </p>
                  <h3>LES ACCESSOIRES</h3>
                  <p>
                    La personnalisation jusqu’au moindre détail. Bien pensé,
                    chaque accessoire a sa place dans un dressing. Chaussures,
                    foulards, sacs à mains, bijoux et accessoires pourront être
                    mis en valeur dans votre dressing.{" "}
                  </p>
                  <p>
                    Plan de travail suivant les exigences : la céramique
                    aujourd&#39;hui remporte tous les suffrages : résistance à
                    la chaleur et aux rayures avec de nombreux décors possible
                    (même imitation bois !). La pierre naturelle – le granit –
                    ou même le bois en lamellé massif donneront un cachet plus
                    authentique. Et bien sûr le stratifié, qui reste un
                    excellent rapport qualité – prix avec de nombreux décors et
                    effets de matière.
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
