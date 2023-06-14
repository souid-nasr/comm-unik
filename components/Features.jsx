import React from 'react'
import features_1 from "../assets/img/features-1.jpg"
import features_2 from "../assets/img/features-2.jpg"
import features_3 from "../assets/img/features-3.jpg"
import features_4 from "../assets/img/features-4.jpg"
import Image from 'next/image'
function Features() {
  return (
<section id="features" className="features">
      <div className="container">

        <div className="row gy-4 align-items-center features-item" data-aos="fade-up">

          <div className="col-md-5">
            <Image quality={100} src={features_1} className="img-fluid" alt=""/>
          </div>
          <div className="col-md-7">
            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <ul>
              <li><i className="bi bi-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i className="bi bi-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i className="bi bi-check"></i> Ullam est qui quos consequatur eos accusamus.</li>
            </ul>
          </div>
        </div>

        <div className="row gy-4 align-items-center features-item" data-aos="fade-up">
          <div className="col-md-5 order-1 order-md-2">
          <Image quality={100} src={features_2} className="img-fluid" alt=""/>
          </div>
          <div className="col-md-7 order-2 order-md-1">
            <h3>Corporis temporibus maiores provident</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>

        <div className="row gy-4 align-items-center features-item" data-aos="fade-up">
          <div className="col-md-5">
          <Image quality={100} src={features_3} className="img-fluid" alt=""/>
          </div>
          <div className="col-md-7">
            <h3>Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas</h3>
            <p>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p>
            <ul>
              <li><i className="bi bi-check"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
              <li><i className="bi bi-check"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
              <li><i className="bi bi-check"></i> Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.</li>
            </ul>
          </div>
        </div>

        <div className="row gy-4 align-items-center features-item" data-aos="fade-up">
          <div className="col-md-5 order-1 order-md-2">
          <Image quality={100} src={features_4} className="img-fluid" alt=""/>
          </div>
          <div className="col-md-7 order-2 order-md-1">
            <h3>Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua.
            </p>
            <p>
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>

      </div>
    </section>  )
}

export default Features