import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getAll } from "../back/controller";

export default function Experience(){

    const [experience, setExperience]= useState([])

    useEffect(()=>{
        getAll("experience").then((rs)=>{
          setExperience(rs)
        }).catch((err)=>{
          setExperience([])
        })
    }, [])

    return (
        <div>
            <h2 className="h1">Work experience</h2>
                <p className="text-muted mb-4">Experiences</p>
                <div className="row mb-4 gy-4">
                        {
                            experience.map((exp)=>{
                                return <div className="px-lg-5" key={exp._id}>
                                
                                  <div className="col-lg-6">
                                    <div className="d-flex">
                                      <div className="flex-shrink-0">
                                        <svg className="svg-icon text-primary">
                                          <use xlinkHref="#stack-1"> </use>
                                        </svg>
                                      </div>
                                      <div className="ms-3">
                                        <h3 className="h5 me-3">{exp.company}</h3>
                                        <p className="text-muted mb-2">
                                            {exp.start} - {exp.end} <br />
                                            {exp.job} <br />
                                            {exp.description} <br />
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                           
                            })
                        }
                        
                    </div>

            </div>

    );
}