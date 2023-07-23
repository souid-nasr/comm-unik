import React from "react";
import Link from "next/link";
function Call() {
  return (
    <section id="call-to-action" className="call-to-action">
      <div className="container" data-aos="zoom-out">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <h3>Parlez-nous DE VOTRE PROJET</h3>
            <p>
              {" "}
              Si vous pensez mettre en place une stratégie de communication et
              désirez capter l’attention
            </p>
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
