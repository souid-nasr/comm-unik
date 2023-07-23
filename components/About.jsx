import React from "react";
import about_img from "../assets/img/about.jpg";
import Image from "next/image";
import { LuBrainCog } from "react-icons/lu";
function About() {
  return (
    <section id="about" className="about pt-0">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4">
          <div className="col-lg-6 position-relative align-self-start order-lg-last order-first">
            <Image
              quality={100}
              src={about_img}
              alt="/"
              className="img-fluid"
            />
          </div>
          <div className="col-lg-6 content order-last  order-lg-first">
            <div className="section-header">
              <span>BIENVENUE CHEZ COM UNIK </span>
              <h2>BIENVENUE CHEZ COM UNIK </h2>{" "}
            </div>
            <p>
              … qui allie communication on-line et communication off-line, Com
              Unik conjugue l&#39;ensemble des compétences nécessaires afin de
              vous accompagner dans l&#39;élaboration et la réalisation de votre
              stratégie globale de communication.
            </p>
            <ul>
              <li data-aos="fade-up" data-aos-delay="100">
                <i className="bi bi-diagram-3"></i>
                <div>
                  <h5>UNE LARGE GAMME DE PRODUITS</h5>
                  <p>
                    Avec la sélection rigoureuse de nos fournisseurs nous
                    pouvons proposer un large choix en termes de styles, de
                    matières et de finitions qui nous permettrons de répondre au
                    plus près à vos attentes.
                  </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-fullscreen-exit"></i>
                <div>
                  <h5>DES CONSEILS ADAPTÉS À VOS BESOINS</h5>
                  <p>
                    Votre interlocuteur unique, de la conception au suivi de
                    votre projet, vous conseillera et vous accompagnera tout au
                    long de sa réalisation.
                  </p>
                </div>
              </li>
              <li data-aos="fade-up" data-aos-delay="300">
                <LuBrainCog className="icon"></LuBrainCog>
                <div>
                  <h5>CRÉATIVIÉ</h5>
                  <p>Le maître mot d&#39;une communication réussie est la créativité. SKWERE guide son travail au quotidien en fonction de cette valeur tout en respectant nos champs d&#39;expertise et de compétence.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
