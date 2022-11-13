import React from "react"
import Nav from "../Components/nav"

import Portfolio from "./portfolio"

import Footer from "../Components/footer"
//import "../style/css/font-awesome.min.css"
import "../style/css/style.default.css"
import "../style/css/custom.css"


export default function All(){
    
    return ( 
        <div>
            
            <Nav />
            <div className="page-holder">
                <div className="px-4 d-block d-lg-none">
    
                    <header className="header">
                        <nav className="navbar navbar-expand-lg navbar-light px-0">
                            <button className="navbar-toggler navbar-toggler-end text-sm text-uppercase" type="button" 
                                data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                                aria-expanded="false" aria-label="Toggle navigation" onClick={()=>{
                                    document.querySelector(".sidebar").classList.toggle("active");
                                    document.querySelector(".page-holder").classList.toggle("active");}}>
                                <svg className="svg-icon svg-icon-heavy svg-icon-sm text-dark">
                                    <use xlinkHref="#menu-hamburger-1"> </use>
                                </svg>
                            </button>
                            <a className="navbar-brand" href="/">
                                <img src="img/logo.png" alt="" width="50" />
                            </a>
                        </nav>
                    </header>
                </div>
                <div className="px-4 py-5">
                    <div className="container-fluid">
                        <div className="row gy-4 gx-5 masonry-wrapper">
                            <Portfolio />
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
