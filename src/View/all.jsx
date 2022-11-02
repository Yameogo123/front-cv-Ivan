import React from "react"
import Nav from "../Components/nav"
import Contact from "./contact"
import Experience from "./experience"
import Expertise from "./expertise"
import Portfolio from "./portfolio"
import Skill from "./skills"
import Education from "./education"
import Interest from "./interest"
import Footer from "../Components/footer"
import "../style/css/font-awesome.min.css"
import "../style/css/style.css"


export default function All(){
    
    return (
        <div id="main-wrapper">
            <div id="preloader">
                <div id="status">
                    <div className="status-mes"></div>
                </div>
            </div>
            <div className="columns-block container">
                <Nav />
                <div className="right-col-block blocks">
                    <div className="theiaStickySidebar">
                        <Expertise />
                        <Skill />
                        <Experience />
                        <Education />
                        <Interest />
                        <Portfolio />
                        <Contact />
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
    )
}