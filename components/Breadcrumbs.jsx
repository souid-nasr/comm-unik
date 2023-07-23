"use client";
import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Link from 'next/link'
function Breadcrumbs({title,subtitle}) {
  const [text] = useTypewriter({
    words: [
      "UNE LARGE GAMME DE PRODUITS",
      "DES CONSEILS ADAPTÉS À VOS BESOINS",
    ],
    loop: true,
    typeSpeed: 30,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div><div className="breadcrumbs">
    <div className="page-header d-flex align-items-center" >
      <div className="container position-relative">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-11 text-center">
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
    <nav>
      <div className="container">
        <ol>
          <li><Link className="nav-link" href="/">Home</Link></li>
          <li>{subtitle}</li>
        </ol>
      </div>
    </nav>
  </div></div>
  )
}

export default Breadcrumbs