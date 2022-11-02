import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getAll } from "../back/controller";

export default function Education(){

    const [formation, setformation]= useState([])
    useEffect(()=>{
        getAll("formation").then((rs)=>{
          setformation(rs)
        }).catch((err)=>{
          setformation([])
        })
    }, [])

    return (
        <section className="section-wrapper section-education">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title"><h2>Education</h2></div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        {
                            formation.map((f)=>{
                                return <div className="content-item" key={f._id}>
                                <small>{f.start} - {f.end}</small>
                                <h3>{f.subject}</h3>
                                <h4>{f.school}</h4>
    
                                <p>{f.place}</p>
                            </div>
                            })
                        }
                    </div>
                </div>
            </div>

        </section>
    )
}