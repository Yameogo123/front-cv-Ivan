import React from "react";
import "../style/load.css"

export default function Expertise(){

    return (
        <div className="p-5 mb-5 bg-light">
            <div className="row gy-3">
              <div className="col-sm-9">
                <h1 className="fw-normal">Hello! I'm <strong>Wendyam M. Ivan YAMEOGO</strong>. </h1>
                <h2 className="h1 fw-normal mb-4">I'm a <strong>Developer </strong></h2>
                <p className="text-muted mb-4">

                </p>
                <ul className="list-inline mb-0">
                  <li className="list-inline-item me-5 my-2">
                    <a className="btn btn-primary rounded-pill" href="callto:+336432852"> 
                      <i className="fab fa-viber"></i>
                      <span className="align-middle"> Call me</span>
                    </a>
                  </li>
                  <li className="list-inline-item my-2">
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item"><a className="reset-anchor" href="https://www.facebook.com/yameogoivan10"><i className="fab fa-facebook-f"></i></a></li>
                      <li className="list-inline-item"><a className="reset-anchor" href="https://www.linkedin.com/in/wendyam-yameogo-89963b163/"><i className="fab fa-linkedin"></i></a></li>
                      <li className="list-inline-item"><a className="reset-anchor" href="https://wa.me/33643602852"><i className="fab fa-whatsapp"></i></a></li>
                      <li className="list-inline-item"><a className="reset-anchor" href="mailto:yameogoivan10@gmail.com"><i className="fas fa-envelope"></i></a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="col-sm-3">
                <img className="img-fluid img-thumbnail rounded-circle" src="img/profil.jpg" alt="Maximilien" />
              </div>
            </div>
          </div>
          
    );
}