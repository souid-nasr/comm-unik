import React from "react";
import service_1 from "../assets/img/storage-service.jpg";
import service_2 from "../assets/img/logistics-service.jpg";
import service_3 from "../assets/img/cargo-service.jpg";
import service_4 from "../assets/img/storage-service.jpg";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
function Porfolio() {
  return (
    <div>
      <Breadcrumbs
        title="Nos Realisations"
        subtitle="Découvrez en image la réalisation de nos cuisines et aménagements intérieurs sur mesure"
      />
      <section id="service" className="services pt-0">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <span>Our Services</span>
            <h2>Our Services</h2>
          </div>

          <div className="row gy-4">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="card">
                <div className="card-img">
                  <Image quality={100} src={service_1} alt="" className="img-fluid" />
                </div>
                <p>
                  Dicta quam similique quia architecto eos nisi aut ratione aut
                  ipsum reiciendis sit doloremque oluptatem aut et molestiae ut
                  et nihil
                </p>
                <h3>
                  <Link href="/service" className="nav-link stretched-link">
                    voir plus
                  </Link>
                </h3>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="card">
                <div className="card-img">
                  <Image quality={100} src={service_2} alt="" className="img-fluid" />
                </div>
                <p>
                  Dicta quam similique quia architecto eos nisi aut ratione aut
                  ipsum reiciendis sit doloremque oluptatem aut et molestiae ut
                  et nihil
                </p>
                <h3>
                  <Link href="/service" className="nav-link stretched-link">
                    voir plus
                  </Link>
                </h3>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="card">
                <div className="card-img">
                  <Image quality={100} src={service_3} alt="" className="img-fluid" />
                </div>
                <p>
                  Dicta quam similique quia architecto eos nisi aut ratione aut
                  ipsum reiciendis sit doloremque oluptatem aut et molestiae ut
                  et nihil
                </p>
                <h3>
                  <Link href="/service" className="nav-link stretched-link">
                    voir plus
                  </Link>
                </h3>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="card">
                <div className="card-img">
                  <Image quality={100} src={service_4} alt="" className="img-fluid" />
                </div>
                <p>
                  Dicta quam similique quia architecto eos nisi aut ratione aut
                  ipsum reiciendis sit doloremque oluptatem aut et molestiae ut
                  et nihil
                </p>
                <h3>
                  <Link href="/service" className="nav-link stretched-link">
                    voir plus
                  </Link>
                </h3>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="card">
                <div className="card-img">
                  <Image quality={100} src={service_1} alt="" className="img-fluid" />
                </div>
                <p>
                  Dicta quam similique quia architecto eos nisi aut ratione aut
                  ipsum reiciendis sit doloremque oluptatem aut et molestiae ut
                  et nihil
                </p>
                <h3>
                  <Link href="/service" className="nav-link stretched-link">
                    voir plus
                  </Link>
                </h3>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="card">
                <div className="card-img">
                  <Image quality={100} src={service_2} alt="" className="img-fluid" />
                </div>
                <p>
                  Dicta quam similique quia architecto eos nisi aut ratione aut
                  ipsum reiciendis sit doloremque oluptatem aut et molestiae ut
                  et nihil
                </p>
                <h3>
                  <Link href="/service" className="nav-link stretched-link">
                    voir plus
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Porfolio;
