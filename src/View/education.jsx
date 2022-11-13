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
        <div>
            <h2 className="h1">Education</h2>
            <p className="text-muted mb-4"></p>
                <div className="row mb-4 gy-4">
                    {
                        formation.map((f)=>{
                            return <div className="content-item" key={f._id}>
                            <small>{f.start} - {f.end}</small>
                            <h5>{f.subject}</h5>
                            <h6>{f.school}</h6>

                            <p>{f.place}</p>
                        </div>
                    })
                }
            </div>
        </div>
   
    )
}