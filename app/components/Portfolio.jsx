"use client";
import React, { useState } from "react";
import app_1 from "../assets/img/portfolio/app-1.jpg";
import app_2 from "../assets/img/portfolio/app-2.jpg";
import product_1 from "../assets/img/portfolio/product-1.jpg";
import product_2 from "../assets/img/portfolio/product-2.jpg";
import book_1 from "../assets/img/portfolio/books-1.jpg";
import book_2 from "../assets/img/portfolio/books-2.jpg";
import branding_1 from "../assets/img/portfolio/branding-1.jpg";
import branding_2 from "../assets/img/portfolio/branding-2.jpg";
import Image from "next/image";
import { ImCancelCircle } from "react-icons/im";

const Category = ({ dataSet }) => {
    const [imageModal, setImageModal] = useState(false);
    const [imageSource, setImageSource] = useState("");
  
    const setImageOnModal = (el) => {
      setImageModal(true);
      setImageSource(el);
    };

  return (
    <>
    <div className={imageModal ? "image-box show-image-box" : "image-box"}>
    <div className="image-box-content">
      <Image src={imageSource} alt="" />
      <span
        className="image-box-close-btn"
        onClick={() => setImageModal(false)}
      >
        <ImCancelCircle size={30} />
      </span>
    </div>
  </div>
{dataSet.map((el) => {
  return (
    <div
      class="col-xl-3 col-lg-4 col-md-3 portfolio-item filter-app"
      key={el.title}
      onClick={() => setImageOnModal((el.image))}
    >
      <Image src={el.image} class="img-fluid" alt=""></Image>
      <div class="portfolio-info">
        <h4>{el.title}</h4>
        <a
        //   href="assets/img/portfolio/app-1.jpg"
          title="App 1"
          data-gallery="portfolio-gallery"
          class="glightbox preview-link"
        >
          <i class="bi bi-zoom-in"onClick={() => setImageOnModal((el.image))}></i>
        </a>
        {/* <a
          href="portfolio-details.html"
          title="More Details"
          class="details-link"
        >
          <i class="bi bi-link-45deg"></i>
        </a> */}
      </div>
    </div>
              );
            })}</> ) }
const data = [
  { title: "App 1", image: app_1, category: "app" },
  { title: "App 2", image: app_2, category: "app" },
  { title: "Produact 1", image: product_1, category: "product" },
  { title: "Product 2", image: product_2, category: "product" },
  { title: "Book 1", image: book_1, category: "book" },
  { title: "Book 2", image: book_2, category: "book" },
  { title: "branding 1", image: branding_1, category: "branding" },
  { title: "branding 2", image: branding_2, category: "branding" },
];
function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const data_app = data.filter((el) => el.category === "app");
  const data_product = data.filter((el) => el.category === "product");
  const data_book = data.filter((el) => el.category === "book");
  const data_branding = data.filter((el) => el.category === "branding");
  const [imageModal, setImageModal] = useState(false);
  const [imageSource, setImageSource] = useState("");

  const setImageOnModal = (el) => {
    setImageModal(true);
    setImageSource(el);
  };
  return (
    <section id="portfolio" class="portfolio" data-aos="fade-up">
      <div class="container">
        <div class="section-header">
          <h2>Portfolio</h2>
          <p>
            Non hic nulla eum consequatur maxime ut vero memo vero totam
            officiis pariatur eos dolorum sed fug dolorem est possimus esse quae
            repudiandae. Dolorem id enim officiis sunt deserunt esse soluta
            consequatur quaerat
          </p>
        </div>
      </div>

      <div class="container-fluid" data-aos="fade-up" data-aos-delay="200">
        <div
          class="portfolio-isotope"
          data-portfolio-filter="*"
          data-portfolio-layout="masonry"
          data-portfolio-sort="original-order"
        >
          <ul class="portfolio-flters">

            <li
              data-filter="*"
              className={activeCategory === "all" ? "filter-active" : ""}
              data-bs-toggle="tab"
            >
              <button onClick={() => setActiveCategory("all")}> All</button>
            </li>
            <li
              data-filter="*"
              className={activeCategory === "app" ? "filter-active" : ""}
              data-bs-toggle="tab"
            >
              <button onClick={() => setActiveCategory("app")}> App</button>
            </li>
            <li
              data-filter="*"
              className={activeCategory === "product" ? "filter-active" : ""}
              data-bs-toggle="tab"
            >
              <button onClick={() => setActiveCategory("product")}> Product</button>
            </li>
            <li
              data-filter="*"
              className={activeCategory === "book" ? "filter-active" : ""}
              data-bs-toggle="tab"
            >
              <button onClick={() => setActiveCategory("book")}> Books</button>
            </li>                        <li
              data-filter="*"
              className={activeCategory === "branding" ? "filter-active" : ""}
              data-bs-toggle="tab"
            >
              <button onClick={() => setActiveCategory("branding")}>Branding</button>
            </li>
          </ul>

          <div class="row g-0 portfolio-container">
            {activeCategory === "all" && <Category dataSet={data} />}
            {activeCategory === "app" && <Category dataSet={data_app} />}
            {activeCategory === "product" && <Category dataSet={data_product} />}
            {activeCategory === "book" && <Category dataSet={data_book} />}
            {activeCategory === "branding" && <Category dataSet={data_branding} />}

          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
