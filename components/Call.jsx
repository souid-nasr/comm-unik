import React from "react";
import Link from "next/link";
function Call() {
  return (
    <section id="call-to-action" className="call-to-action">
      <div className="container" data-aos="zoom-out">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h3>Qualité & Sur-mesure</h3>
            <p> Sublimez votre intérieur afin qu&#39;il vous ressemble ! !</p>
            <Link className="cta-btn" href="/contact">
              Appel à l&#39;action
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Call;
