import React from 'react'
import { GoTools } from "react-icons/go";
import Link from 'next/link';
function Featured() {
  return (
    <section id="featured-services" className="featured-services">
    <div className="container">

      <div className="row gy-4">

        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up">
          <div className="icon flex-shrink-0"><GoTools className=""></GoTools></div>
          <div>
            <h4 className="title">PROPOSITION D&#39;AGENCEMENT ET PROJECTIONS PLAN 3D</h4>
            <p className="description">PRECONISATIONS ET ETUDE DE VOTRE PROJET VIRTUEL</p>
          </div>
        </div>


        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="100">
          <div className="icon flex-shrink-0"><i className="bi bi-truck"></i></div>
          <div>
            <h4 className="title">LIVRAISON ET INSTALLATION SUR PLACE</h4>
            <p className="description">QUALIFICATION D&#39;UN MENUISIER POSEUR</p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 service-item d-flex" data-aos="fade-up" data-aos-delay="200">
          <div className="icon flex-shrink-0"><i className="bi bi-house-check"></i></div>
          <div>
            <h4 className="title">RECEPTION DE FIN D&#39;INSTALLATION</h4>
            <p className="description">RELATION CLIENTS</p>
          </div>
        </div>

      </div>

    </div>
  </section>
  )
}

export default Featured