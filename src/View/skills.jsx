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
        <div>
            <h2 className="h1">Skills</h2>
            <p className="text-muted mb-4"></p>
                <div className="row mb-4 gy-4">

                    {
                        skill.map((sk)=>{
                            return <div className="progress-item mb-2" key={sk._id}>
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
        
    );
}