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
        <section className="section-wrapper section-interest gray-bg">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h2>Certification</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        {
                            certifs.map((c)=>{
                                return <div className="content-item" key={c._id}>
                                <h3>{c.title}</h3>
                                <div className="portfolio-thumb">
                                    <img src={c.image ? c.image : 'img/portfolio-2.jpg'} alt="image1" width={200} />
                                </div>
                                <a className="" href={c.url} target="_blank" rel="noreferrer">{c.origin}</a>
                            </div>
                            })
                        }
                        
                    </div>
                </div>

            </div>
        </section>
        
    )
}