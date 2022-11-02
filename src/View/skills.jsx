import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getAll } from "../back/controller";

export default function Skill(){

    const [skill, setskill]= useState([])

    useEffect(()=>{
        getAll("skill").then((rs)=>{
          setskill(rs)
        }).catch((err)=>{
          setskill([])
        })
    }, [])

    return (
        <section className="section-wrapper skills-wrapper">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h2>Skills</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="progress-wrapper">

                            {
                                skill.map((sk)=>{
                                    return <div className="progress-item mb-5" key={sk._id}>
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow={sk.percentage} aria-valuemin="0"
                                                aria-valuemax="100" style={{width:sk.percentage+"%"}}><span className="progress-percent">{sk.percentage}</span>
                                            </div>
                                        </div>
                                        <span className="progress-title">{sk.name}</span>
                                    </div>
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    );
}