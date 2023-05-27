import React from 'react'
import product_1 from '../assets/img/services-1.jpg'
import product_2 from '../assets/img/services-2.jpg'
import product_3 from '../assets/img/services-3.jpg'
import product_4 from '../assets/img/services-4.jpg'
import product_5 from '../assets/img/services-5.jpg'
import Image from 'next/image'
function Products() {
  return (
    <>
    
    <section id="products" className="products">
      <div className="container" data-aos="fade-up">

        <div className="section-header">
          <h2>Our products</h2>
          <p>Ea vitae aspernatur deserunt voluptatem impedit deserunt magnam occaecati dssumenda quas ut ad dolores adipisci aliquam.</p>
        </div>

        <div className="row gy-5">
        <div className="col-lg-4 product-details">
              <div className="products-list">
                <a href="#" className="active">
                  Storage
                </a>
                <a href="#">Logistics</a>
                <a href="#">Cargo</a>
                <a href="#">Trucking</a>
                <a href="#">Packaging</a>
                <a href="#">Warehousing</a>
              </div>

              <h4>Enim qui eos rerum in delectus</h4>
              <p>
                Nam voluptatem quasi numquam quas fugiat ex temporibus quo est.
                Quia aut quam quod facere ut non occaecati ut aut. Nesciunt
                mollitia illum tempore corrupti sed eum reiciendis. Maxime modi
                rerum.
              </p>
            </div>
          <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div className="product-item">
              <div className="img">
                <Image src={product_1} className="img-fluid" alt=""/>
              </div>
              <div className="details position-relative">
                <div className="icon">
                  <i className="bi bi-activity"></i>
                </div>
                <a href="#" className="stretched-link">
                  <h3>Nesciunt Mete</h3>
                </a>
                <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis.</p>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="300">
            <div className="product-item">
              <div className="img">
              <Image src={product_2} className="img-fluid" alt=""/>              </div>
              <div className="details position-relative">
                <div className="icon">
                  <i className="bi bi-broadcast"></i>
                </div>
                <a href="#" className="stretched-link">
                  <h3>Eosle Commodi</h3>
                </a>
                <p>Ut autem aut autem non a. Sint sint sit facilis nam iusto sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="400">
            <div className="product-item">
              <div className="img">
              <Image src={product_3} className="img-fluid" alt=""/>              </div>
              <div className="details position-relative">
                <div className="icon">
                  <i className="bi bi-easel"></i>
                </div>
                <a href="#" className="stretched-link">
                  <h3>Ledo Markt</h3>
                </a>
                <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="500">
            <div className="product-item">
              <div className="img">
              <Image src={product_4} className="img-fluid" alt=""/>              </div>
              <div className="details position-relative">
                <div className="icon">
                  <i className="bi bi-bounding-box-circles"></i>
                </div>
                <a href="#" className="stretched-link">
                  <h3>Asperiores Commodit</h3>
                </a>
                <p>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</p>
                <a href="#" className="stretched-link"></a>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="600">
            <div className="product-item">
              <div className="img">
              <Image src={product_5} className="img-fluid" alt=""/>              </div>
              <div className="details position-relative">
                <div className="icon">
                  <i className="bi bi-calendar4-week"></i>
                </div>
                <a href="#" className="stretched-link">
                  <h3>Velit Doloremque</h3>
                </a>
                <p>Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.</p>
                <a href="#" className="stretched-link"></a>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-md-6" data-aos="zoom-in" data-aos-delay="700">
            <div className="product-item">
              <div className="img">
              <Image src={product_1} className="img-fluid" alt=""/>              </div>
              <div className="details position-relative">
                <div className="icon">
                  <i className="bi bi-chat-square-text"></i>
                </div>
                <a href="#" className="stretched-link">
                  <h3>Dolori Architecto</h3>
                </a>
                <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</p>
                <a href="#" className="stretched-link"></a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    </>
  )
}

export default Products