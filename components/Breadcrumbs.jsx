import React from 'react'
import Link from 'next/link'
function Breadcrumbs({title,subtitle}) {
  return (
    <div><div className="breadcrumbs">
    <div className="page-header d-flex align-items-center" >
      <div className="container position-relative">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 text-center">
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
    <nav>
      <div className="container">
        <ol>
          <li><Link href="/">Home</Link></li>
          <li>{title}</li>
        </ol>
      </div>
    </nav>
  </div></div>
  )
}

export default Breadcrumbs