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
        <section className="section-wrapper section-experience gray-bg">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title"><h2>Work Experience</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        {
                            experience.map((exp)=>{
                                return <div className="content-item" key={exp._id}>
                                <small>{exp.start} - {exp.end}</small>
                                <h3>{exp.job}</h3>
                                <h4>{exp.company}</h4>
                                <p>{exp.description}</p>
                            </div>
                            })
                        }
                        
                    </div>
                </div>
            </div>

        </section>
    );
}