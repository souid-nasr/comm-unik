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
      className="col-xl-3 col-lg-4 col-md-3 portfolio-item filter-app"
      key={el._id}
      onClick={() => setImageOnModal((el.image))}
    >
      <Image src={el.image} className="img-fluid" alt=""></Image>
      <div className="portfolio-info">
        <h4>{el.title}</h4>
        <a
          title="App 1"
          data-gallery="portfolio-gallery"
          className="glightbox preview-link"
        >
          <i className="bi bi-zoom-in"onClick={() => setImageOnModal((el.image))}></i>
        </a>
        {/* <a
          href="portfolio-details.html"
          title="More Details"
          className="details-link"
        >
          <i className="bi bi-link-45deg"></i>
        </a> */}
      </div>
    </div>
              );
            })}</> ) }
const data = [
  { _id: "id" + Math.random().toString(16).slice(2), title: "App 1", image: app_1, category: "app" },
  { _id: "id" + Math.random().toString(16).slice(2), title: "App 2", image: app_2, category: "app" },
  { _id: "id" + Math.random().toString(16).slice(2), title: "Produact 1", image: product_1, category: "product" },
  { _id: "id" + Math.random().toString(16).slice(2), title: "Product 2", image: product_2, category: "product" },
  { _id: "id" + Math.random().toString(16).slice(2), title: "Book 1", image: book_1, category: "book" },
  { _id: "id" + Math.random().toString(16).slice(2), title: "Book 2", image: book_2, category: "book" },
  { _id: "id" + Math.random().toString(16).slice(2), title: "branding 1", image: branding_1, category: "branding" },
  { _id: "id" + Math.random().toString(16).slice(2), title: "branding 2", image: branding_2, category: "branding" },
];
function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const data_app = data.filter((el) => el.category === "app");
  const data_product = data.filter((el) => el.category === "product");
  const data_book = data.filter((el) => el.category === "book");
  const data_branding = data.filter((el) => el.category === "branding");

  return (
    <section id="portfolio" className="portfolio" data-aos="fade-up">
      <div className="container">
        <div className="section-header">
          <h2>Portfolio</h2>
          <p>
            Non hic nulla eum consequatur maxime ut vero memo vero totam
            officiis pariatur eos dolorum sed fug dolorem est possimus esse quae
            repudiandae. Dolorem id enim officiis sunt deserunt esse soluta
            consequatur quaerat
          </p>
        </div>
      </div>

      <div className="container-fluid" data-aos="fade-up" data-aos-delay="200">
        <div
          className="portfolio-isotope"
          data-portfolio-filter="*"
          data-portfolio-layout="masonry"
          data-portfolio-sort="original-order"
        >
          <ul className="portfolio-flters">

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

          <div className="row g-0 portfolio-container">
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
