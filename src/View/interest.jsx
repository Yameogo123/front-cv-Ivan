import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getAll } from "../back/controller";

export default function Interest(){

    const [certifs, setCertifs]= useState([])

    useEffect(()=>{
        getAll("certification").then((rs)=>{
          setCertifs(rs)
        }).catch((err)=>{
          console.log(err);
          setCertifs([])
        })
    }, [])


    return (
        <div>
            <h2 className="h1">Certifications</h2>
            <p className="text-muted mb-4"></p>
                <div className="row mb-4 gy-4">
                {
                    certifs.map((c)=>{
                        return <div className="col-lg-4 col-md-6 grid-item m-2" key={c._id}>
                        <h5>{c.title}</h5>
                        <div className="portfolio-thumb">
                            <img src={c.image ? c.image : 'img/default.png'} alt="image1" width={200} />
                        </div>
                        <a className="" href={c.url} target="_blank" rel="noreferrer">{c.origin}</a>
                    </div>
                    })
                }
                        
            </div>
        </div>

            
        
    )
}