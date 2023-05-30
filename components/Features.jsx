"use client"
import React,{useState} from 'react'
import features from '@/assets/img/features-1.svg'
import Image from 'next/image';
function Features() {
    const[showtab, setShowtab]= useState(1);

    const handletab = (e)=>{
     setShowtab(e);
       }
  return (
<>
<div className="section-header">
          <h2>Our Services</h2>
          <p>Ea vitae aspernatur deserunt voluptatem impedit deserunt magnam occaecati dssumenda quas ut ad dolores adipisci aliquam.</p>
        </div>
    <section id="features" className="features">
      <div className="container" data-aos="fade-up">

        <ul className="nav nav-tabs row gy-4 d-flex">

          <li className="nav-item col-6 col-md-4 col-lg-2">
            <a data-bs-toggle="tab" data-bs-target="#tab-1" className= {showtab===1? "nav-link active show": "nav-link" }  onClick={()=>handletab(1)}>
              <i className="bi bi-binoculars color-cyan"></i>
              <h4>Modinest</h4>
            </a>
          </li>

          <li className="nav-item col-6 col-md-4 col-lg-2">
            <a className= {showtab===2? "nav-link active show": "nav-link" }  onClick={()=>handletab(2)} data-bs-toggle="tab" data-bs-target="#tab-2">
              <i className="bi bi-box-seam color-indigo"></i>
              <h4>Undaesenti</h4>
            </a>
          </li>

          <li className="nav-item col-6 col-md-4 col-lg-2">
            <a className= {showtab===3? "nav-link active show": "nav-link" }  onClick={()=>handletab(3)} data-bs-toggle="tab" data-bs-target="#tab-3">
              <i className="bi bi-brightness-high color-teal"></i>
              <h4>Pariatur</h4>
            </a>
          </li>

          <li className="nav-item col-6 col-md-4 col-lg-2">
            <a className= {showtab===4? "nav-link active show": "nav-link" }  onClick={()=>handletab(4)} data-bs-toggle="tab" data-bs-target="#tab-4">
              <i className="bi bi-command color-red"></i>
              <h4>Nostrum</h4>
            </a>
          </li>

          <li className="nav-item col-6 col-md-4 col-lg-2">
            <a className= {showtab===5? "nav-link active show": "nav-link" }  onClick={()=>handletab(5)} data-bs-toggle="tab" data-bs-target="#tab-5">
              <i className="bi bi-easel color-blue"></i>
              <h4>Adipiscing</h4>
            </a>
          </li>

          <li className="nav-item col-6 col-md-4 col-lg-2">
            <a className= {showtab===6? "nav-link active show": "nav-link" }  onClick={()=>handletab(6)} data-bs-toggle="tab" data-bs-target="#tab-6">
              <i className="bi bi-map color-orange"></i>
              <h4>Reprehit</h4>
            </a>
          </li>

        </ul>

        <div className="tab-content">

          <div className= { showtab===1 ? "tab-pane active show":"tab-pane"}  id="tab-1">
            <div className="row gy-4">
              <div className="col-lg-8 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="100">
                <h3>Modinest</h3>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li><i className="bi bi-check-circle-fill"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li><i className="bi bi-check-circle-fill"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                  <li><i className="bi bi-check-circle-fill"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                </ul>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
                </p>
              </div>
              <div className="col-lg-4 order-1 order-lg-2 text-center" data-aos="fade-up" data-aos-delay="200">
                <Image src={features} alt="" className="img-fluid"/>
              </div>
            </div>
          </div>

          <div className= { showtab===2 ? "tab-pane active show":"tab-pane"}  id="tab-2">
            <div className="row gy-4">
              <div className="col-lg-8 order-2 order-lg-1">
                <h3>Undaesenti</h3>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
                </p>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li><i className="bi bi-check-circle-fill"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li><i className="bi bi-check-circle-fill"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                  <li><i className="bi bi-check-circle-fill"></i> Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</li>
                  <li><i className="bi bi-check-circle-fill"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                </ul>
              </div>
              <div className="col-lg-4 order-1 order-lg-2 text-center">
                <Image src={features} alt="" className="img-fluid"/>
              </div>
            </div>
          </div>

          <div className= { showtab===3 ? "tab-pane active show":"tab-pane"}  id="tab-3">
            <div className="row gy-4">
              <div className="col-lg-8 order-2 order-lg-1">
                <h3>Pariatur</h3>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
                </p>
                <ul>
                  <li><i className="bi bi-check-circle-fill"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li><i className="bi bi-check-circle-fill"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                  <li><i className="bi bi-check-circle-fill"></i> Provident mollitia neque rerum asperiores dolores quos qui a. Ipsum neque dolor voluptate nisi sed.</li>
                </ul>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
              </div>
              <div className="col-lg-4 order-1 order-lg-2 text-center">
                <Image src={features} alt="" className="img-fluid"/>
              </div>
            </div>
          </div>

          <div className= { showtab===4 ? "tab-pane active show":"tab-pane"}  id="tab-4">
            <div className="row gy-4">
              <div className="col-lg-8 order-2 order-lg-1">
                <h3>Nostrum</h3>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
                </p>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li><i className="bi bi-check-circle-fill"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li><i className="bi bi-check-circle-fill"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                  <li><i className="bi bi-check-circle-fill"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                </ul>
              </div>
              <div className="col-lg-4 order-1 order-lg-2 text-center">
                <Image src={features} alt="" className="img-fluid"/>
              </div>
            </div>
          </div>

          <div className= { showtab===5 ? "tab-pane active show":"tab-pane"}  id="tab-5">
            <div className="row gy-4">
              <div className="col-lg-8 order-2 order-lg-1">
                <h3>Adipiscing</h3>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
                </p>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li><i className="bi bi-check-circle-fill"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li><i className="bi bi-check-circle-fill"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                  <li><i className="bi bi-check-circle-fill"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                </ul>
              </div>
              <div className="col-lg-4 order-1 order-lg-2 text-center">
                <Image src={features} alt="" className="img-fluid"/>
              </div>
            </div>
          </div>

          <div className= { showtab===6 ? "tab-pane active show":"tab-pane"} id="tab-6">
            <div className="row gy-4">
              <div className="col-lg-8 order-2 order-lg-1">
                <h3>Reprehit</h3>
                <p>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                  culpa qui officia deserunt mollit anim id est laborum
                </p>
                <p className="fst-italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                  magna aliqua.
                </p>
                <ul>
                  <li><i className="bi bi-check-circle-fill"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                  <li><i className="bi bi-check-circle-fill"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                  <li><i className="bi bi-check-circle-fill"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                </ul>
              </div>
              <div className="col-lg-4 order-1 order-lg-2 text-center">
                <Image src={features} alt="" className="img-fluid"/>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    </>
  )
}

export default Features