import React from 'react'

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
          <li><a href="/">Home</a></li>
          <li>{title}</li>
        </ol>
      </div>
    </nav>
  </div></div>
  )
}

export default Breadcrumbs