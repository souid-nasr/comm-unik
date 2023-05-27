import React from "react";
import hero from "../assets/img/hero-carousel/hero-carousel-3.svg";
import Image from "next/image";
function Hero() {
  return (
    <div>
      {" "}
      <section
        id="hero-animated"
        className="hero-animated d-flex align-items-center"
      >
        <div
          className="container d-flex flex-column justify-content-center align-items-center text-center position-relative"
          data-aos="zoom-out"
        >
          <Image src={hero} className="img-fluid animated" alt="hero" />
          <h2 className="typewriter">
            Welcome to <span>Com Unik</span>
          </h2>
          <p>
            Et voluptate esse accusantium accusamus natus reiciendis quidem
            voluptates similique aut.
          </p>
          <div className="d-flex">
            <a href="/about" className="btn-get-started scrollto">
              Get Started
            </a>
            <a
              href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
              className="glightbox btn-watch-video d-flex align-items-center"
            >
              <i className="bi bi-play-circle"></i>
              <span>Watch Video</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
