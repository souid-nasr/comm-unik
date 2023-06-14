"use client"
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ToTop() {
  const [showButton, setShowButton] = useState(true);
  const onScroll = () => {
    let pixelsFromTop = window.scrollY;
    let documentHeight = document.body.clientHeight;
    let windowHeight = window.innerHeight;
    let difference = documentHeight - windowHeight;
    let percentage = (100 * pixelsFromTop) / difference;

    // Scroll to top button logic
    window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
   
      <FaArrowUp
        className={showButton ? "showButton" : "hidden"}
        onClick={scrollToTop}
      />

  );
}

export default ToTop;