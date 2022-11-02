import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getAll } from "../back/controller";

export default function Portfolio(){

    const [projets, setprojets]= useState([])
    useEffect(()=>{
        getAll("projet").then((rs)=>{
          setprojets(rs)
        }).catch((err)=>{
          console.log(err);
          setprojets([])
        })
    }, [])

    return (
        <section className="section-wrapper portfolio-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h2>Portfolio</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {projets.map((project)=>{
                        return <div className="col-md-6" key={project._id}>
                            <a className="portfolio-item" href={project.link} target="_blank" rel="noreferrer">
                                <div className="portfolio-thumb">
                                    <img src={project.image ? project.image : 'img/portfolio-2.jpg'} alt="image1" />
                                </div>

                                <div className="portfolio-info">
                                    <h3>{project.title}</h3>
                                    <small>{project.link}</small>
                                </div>
                            </a>
                        </div>
                    })}
                </div>
            </div>
        </section>
        
    );
}