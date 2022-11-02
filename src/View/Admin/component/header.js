import React from "react";
import { Link } from "react-router-dom";

export default function Header(){

    return (
        <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
          <div className="navbar-menu-wrapper d-flex align-items-stretch">
            <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
              <span className="mdi mdi-chevron-double-left"></span>
            </button>
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
              <a className="navbar-brand brand-logo-mini" href="/resume"><img src="../img/0001.jpg" alt="logo" /></a>
            </div>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <Link to={"/resume/admin/message"} className="nav-link">
                  <i className="mdi mdi-email-outline"></i>
                </Link>
              </li>
            </ul>
            
            <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
              <span className="mdi mdi-menu"></span>
            </button>
          </div>
        </nav>
 
    );
}