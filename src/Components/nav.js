import React from "react"

export default function Nav(){


    return (
        <div className="sidebar">
        <div className="sidebar-inner d-flex flex-column">
          <div className="px-4 py-5"><a href="/"><img src="img/logo.png" alt="" width="90" /></a></div>
          <div className="sidebar-menu-holder flex-grow-1">
            <ul className="sidebar-menu list-unstyled">
              <li className="mb-2 pb-1">
                <a className="sidebar-link h6 text-uppercase letter-spacing-2 fw-bold text-sm active" href="/">Home</a>
              </li>
              <li className="mb-2 pb-1">
                <a className="sidebar-link h6 text-uppercase letter-spacing-2 fw-bold text-sm active" href="/about">About</a>
              </li>
              <li className="mb-2 pb-1">
                <a className="sidebar-link h6 text-uppercase letter-spacing-2 fw-bold text-sm" href="/admin/skill">Administration</a>
              </li>
            </ul>
          </div>
          <div className="px-4 py-3">
            <ul className="list-inline list-social mb-3">
              <li className="list-inline-item"><a className="reset-anchor" href="https://www.facebook.com/yameogoivan10"><i className="fab fa-facebook-f"></i></a></li>
              <li className="list-inline-item"><a className="reset-anchor" href="https://www.linkedin.com/in/wendyam-yameogo-89963b163/"><i className="fab fa-linkedin"></i></a></li>
              <li className="list-inline-item"><a className="reset-anchor" href="https://github.com/Yameogo123"><i className="fab fa-github"></i></a></li>
              <li className="list-inline-item"><a className="reset-anchor" href="mailto:yameogoivan10@gmail.com"><i className="fas fa-envelope"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    

        
    )
}