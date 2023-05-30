"use client";
import React from "react";
import { useEffect } from "react";
import { BsChevronUp } from "react-icons/bs";

const ScrollToTop = () => {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      var scroll = document.querySelector(".scroll-top");
      scroll.classList.toggle("active", window.scrollY > 500);
    });
  });
  const ToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="scroll-top" onClick={ToTop}>
      <BsChevronUp ></BsChevronUp>
    </div>
  );
};

export default ScrollToTop;
