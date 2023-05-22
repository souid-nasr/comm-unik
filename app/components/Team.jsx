import React from 'react'
import team_1 from '../assets/img/team/team-1.jpg'
import team_2 from '../assets/img/team/team-2.jpg'
import team_3 from '../assets/img/team/team-3.jpg'
import Image from 'next/image'
function Team() {
  return (
    <section id="team" class="team">
    <div class="container" data-aos="fade-up">

      <div class="section-header">
        <h2>Our Team</h2>
        <p>Architecto nobis eos vel nam quidem vitae temporibus voluptates qui hic deserunt iusto omnis nam voluptas asperiores sequi tenetur dolores incidunt enim voluptatem magnam cumque fuga.</p>
      </div>

      <div class="row gy-5">

        <div class="col-xl-4 col-md-6 d-flex" data-aos="zoom-in" data-aos-delay="200">
          <div class="team-member">
            <div class="member-img">
              <Image src={team_1} class="img-fluid" alt=""/>
            </div>
            <div class="member-info">
              <div class="social">
                <a href=""><i class="bi bi-twitter"></i></a>
                <a href=""><i class="bi bi-facebook"></i></a>
                <a href=""><i class="bi bi-instagram"></i></a>
                <a href=""><i class="bi bi-linkedin"></i></a>
              </div>
              <h4>Walter White</h4>
              <span>Chief Executive Officer</span>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-md-6 d-flex" data-aos="zoom-in" data-aos-delay="400">
          <div class="team-member">
            <div class="member-img">
            <Image src={team_2} class="img-fluid" alt=""/>            </div>
            <div class="member-info">
              <div class="social">
                <a href=""><i class="bi bi-twitter"></i></a>
                <a href=""><i class="bi bi-facebook"></i></a>
                <a href=""><i class="bi bi-instagram"></i></a>
                <a href=""><i class="bi bi-linkedin"></i></a>
              </div>
              <h4>Sarah Jhonson</h4>
              <span>Product Manager</span>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-md-6 d-flex" data-aos="zoom-in" data-aos-delay="600">
          <div class="team-member">
            <div class="member-img">
            <Image src={team_3} class="img-fluid" alt=""/>            </div>
            <div class="member-info">
              <div class="social">
                <a href=""><i class="bi bi-twitter"></i></a>
                <a href=""><i class="bi bi-facebook"></i></a>
                <a href=""><i class="bi bi-instagram"></i></a>
                <a href=""><i class="bi bi-linkedin"></i></a>
              </div>
              <h4>William Anderson</h4>
              <span>CTO</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
  )
}

export default Team