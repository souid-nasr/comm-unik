import React from "react";
import Link from "next/link";
function Footer() {
  return (
    <div>
      <footer id="footer" className="footer">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">
              <Link
                href="/"
                className="logo nav-link d-flex align-items-center"
              >
                <span>Unik Espace</span>
              </Link>
              <p>AGENCEMENT & RANGEMENT INTÉRIEUR</p>
              <p>Sublimez votre intérieur afin qu&#39;il vous ressemble ! ! </p>
              <p>Qualité & Sur-mesure </p>
              <div className="social-links d-flex mt-4">
                <a
                  href="https://www.facebook.com/Unikespace/"
                  className="facebook"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="instagram">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-6 footer-links">
              <h4>Liens utiles</h4>
              <ul>
                <li>
                  <Link className="nav-link" href="/">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" href="/about">
                    Notre Societe
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" href="/agencements">
                    Amenagements
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" href="/portfolio">
                    Realisations
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" href="/pricing">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Nos Agencements</h4>
              <ul>
                <li>
                  <Link className="nav-link" href="/portfolio/cuisines">
                    Cuisines
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" href="/portfolio/dressings">
                    Dressings
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" href="/portfolio/bibliotheques">
                    Bibliotheques
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" href="/portfolio/habillages">
                    Habillages Mural
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" href="/portfolio/sousescslier">
                    Sous Escaliers
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" href="/portfolio/separations">
                    Separations
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" href="/portfolio/chambres">
                    Chambres d&#39;enfants
                  </Link>
                </li>
                <li>
                  <Link className="nav-link" href="/portfolio/portes">
                    Portes
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contact Us</h4>
              <p>
                P8P4+JX
                <br />
                Ez Zahra
                <br />
                Ben Arous <br />
                <br />
                <strong>Tel:</strong>+216 98 188 622
                <br />
                <strong>Email:</strong>contact@unik-espace.com
                <br />
              </p>
            </div>
          </div>
        </div>

        <div className="container mt-4">
          <div className="copyright">
            &copy; Copyright{" "}
            <strong>
              <span><a href="https://unik-group.com/">Unik Group</a></span>
            </strong>
            . All Rights Reserved
          </div>
          <div className="credits">
            Designed by <a href="https://nasrsouid.vercel.app/">Nasr</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
