import React from 'react'
import service from "../assets/img/storage-service.jpg"
import Image from 'next/image'
import Link from 'next/link'
function Services() {
  return (
    <div>
        <section id="service" className="services pt-0">
      <div className="container" data-aos="fade-up">

        <div className="section-header">
          <span>Our Services</span>
          <h2>Our Services</h2>

        </div>

        <div className="row gy-4">

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="card">
              <div className="card-img">
                <Image quality={100} src={service} alt="" className="img-fluid"/>
              </div>
              <h3><Link href="/service" className="stretched-link">Storage</Link></h3>
              <p>Cumque eos in qui numquam. Aut aspernatur perferendis sed atque quia voluptas quisquam repellendus temporibus itaqueofficiis odit</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="card">
              <div className="card-img">
                <Image quality={100} src={service} alt="" className="img-fluid"/>
              </div>
              <h3><Link href="/service" className="stretched-link">Logistics</Link></h3>
              <p>Asperiores provident dolor accusamus pariatur dolore nam id audantium ut et iure incidunt molestiae dolor ipsam ducimus occaecati nisi</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
            <div className="card">
              <div className="card-img">
                <Image quality={100} src={service} alt="" className="img-fluid"/>
              </div>
              <h3><Link href="/service" className="stretched-link">Cargo</Link></h3>
              <p>Dicta quam similique quia architecto eos nisi aut ratione aut ipsum reiciendis sit doloremque oluptatem aut et molestiae ut et nihil</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
            <div className="card">
              <div className="card-img">
                <Image quality={100} src={service} alt="" className="img-fluid"/>
              </div>
              <h3><Link href="/service" className="stretched-link">Trucking</Link></h3>
              <p>Dicta quam similique quia architecto eos nisi aut ratione aut ipsum reiciendis sit doloremque oluptatem aut et molestiae ut et nihil</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
            <div className="card">
              <div className="card-img">
                <Image quality={100} src={service} alt="" className="img-fluid"/>
              </div>
              <h3><Link href="/service" className="stretched-link">Packaging</Link></h3>
              <p>Illo consequuntur quisquam delectus praesentium modi dignissimos facere vel cum onsequuntur maiores beatae consequatur magni voluptates</p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
            <div className="card">
              <div className="card-img">
                <Image quality={100} src={service} alt="" className="img-fluid"/>
              </div>
              <h3><Link href="/service" className="stretched-link">Warehousing</Link></h3>
              <p>Quas assumenda non occaecati molestiae. In aut earum sed natus eatae in vero. Ab modi quisquam aut nostrum unde et qui est non quo nulla</p>
            </div>
          </div>

        </div>

      </div>
    </section>

    </div>
  )
}

export default Services