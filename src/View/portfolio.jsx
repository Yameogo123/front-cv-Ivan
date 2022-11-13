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
                <div className="row">
                    {projets.map((project)=>{
                        return <div className="col-lg-4 col-md-6 grid-item" key={project._id}>
                        <div className="listing-item ps-0">
                          <div className="position-relative">
                            <ul className="list-inline listing-tags m-0">
                              <li className="list-inline-item">
                                <a className="reset-anchor fw-normal text-gray text-sm" href={project.link} target="_blank" rel="noreferrer">
                                    {project.title}
                                </a>
                            </li>
                            </ul><a className="reset-anchor d-block listing-img-holder" href={project.link} target="_blank" rel="noreferrer">
                                <img className="img-fluid rounded-lg" src={project.image ? project.image : 'img/default.png'} alt="Treasure" width={350}/>
                              <p className="mb-0 text-primary small d-flex align-items-center listing-btn"> <span>Look inside</span>
                                <svg className="svg-icon text-primary svg-icon-sm ms-1">
                                  <use xlinkHref="#arrow-right-1"> </use>
                                </svg>
                              </p></a>
                          </div>
                          <div className="py-3"><a className="reset-anchor"  href={project.link} target="_blank" rel="noreferrer">
                              <h2 className="h5 listing-item-heading">{project.title}</h2></a>
                            <p className="text-sm mb-0 listing-item-description">{project.link}</p>
                          </div>
                        </div>
                      </div>
                    })}
                </div>
        
    );
}