import React from "react";
import about from "../assets/img/about.jpg";
import Image from "next/image";
function About() {
  return (
    <div>
      {" "}
      <section id="about" class="about">
        <div class="container" data-aos="fade-up">
          <div class="section-header">
            <h2>About Us</h2>
            <p>
              Architecto nobis eos vel nam quidem vitae temporibus voluptates
              qui hic deserunt iusto omnis nam voluptas asperiores sequi tenetur
              dolores incidunt enim voluptatem magnam cumque fuga.
            </p>
          </div>

          <div class="row g-4 g-lg-5" data-aos="fade-up" data-aos-delay="200">
            <div class="col-lg-5">
              <div class="about-img">
                <Image src={about} class="img-fluid" alt="" />
              </div>
            </div>

            <div class="col-lg-7">
              <h3 class="pt-0 pt-lg-5">
                Neque officiis dolore maiores et exercitationem quae est seda
                lidera pat claero
              </h3>
              <div class="tab-content">
                <div class="tab-pane fade show active" id="tab1">
                  <p class="fst-italic">
                    Consequuntur inventore voluptates consequatur aut vel et.
                    Eos doloribus expedita. Sapiente atque consequatur minima
                    nihil quae aspernatur quo suscipit voluptatem.
                  </p>

                  <div class="d-flex align-items-center mt-4">
                    <i class="bi bi-check2"></i>
                    <h4>
                      Repudiandae rerum velit modi et officia quasi facilis
                    </h4>
                  </div>
                  <p>
                    Laborum omnis voluptates voluptas qui sit aliquam
                    blanditiis. Sapiente minima commodi dolorum non eveniet
                    magni quaerat nemo et.
                  </p>

                  <div class="d-flex align-items-center mt-4">
                    <i class="bi bi-check2"></i>
                    <h4>Incidunt non veritatis illum ea ut nisi</h4>
                  </div>
                  <p>
                    Non quod totam minus repellendus autem sint velit. Rerum
                    debitis facere soluta tenetur. Iure molestiae assumenda sunt
                    qui inventore eligendi voluptates nisi at. Dolorem quo
                    tempora. Quia et perferendis.
                  </p>

                  <div class="d-flex align-items-center mt-4">
                    <i class="bi bi-check2"></i>
                    <h4>Omnis ab quia nemo dignissimos rem eum quos..</h4>
                  </div>
                  <p>
                    Eius alias aut cupiditate. Dolor voluptates animi ut
                    blanditiis quos nam. Magnam officia aut ut alias quo
                    explicabo ullam esse. Sunt magnam et dolorem eaque magnam
                    odit enim quaerat. Vero error error voluptatem eum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
