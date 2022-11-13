import React from "react"
import { useState } from "react";
import { useEffect } from "react";
import { getAll } from "../back/controller";

export default function Footer(){

    const [adresse, setadresse]= useState({})
    useEffect(()=>{
        getAll("adresse").then((rs)=>{
          setadresse(rs[0])
        }).catch((err)=>{
          console.log(err);
          setadresse([])
        })
    }, [])

    return (
        <footer className="text-muted" style={{background: "#0d0d0d"}}>
            <div className="container-fluid py-5">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <div className="row gy-4">
                            <div className="col-lg-6">
                                <h2 className="h4 text-white mb-4">About me</h2>
                                <p className="text-sm">
                                    I like all about computer science specially development (website and apps) and data (data science)<br/>
                                    My service for the moment is website development
                                </p>
                                <ul className="list-unstyled text-sm mb-0 text-white">
                                    <li className="mb-1"><a className="reset-anchor" href="#!"> <i className="fas text-muted me-2 fa-fw fa-globe-americas"></i>{adresse.town} - {adresse.country}</a></li>
                                    <li className="mb-1"><a className="reset-anchor" href={"callto:"+adresse.phone}> <i className="fas text-muted me-2 fa-fw fa-mobile"></i>{adresse.phone}</a></li>
                                    <li className="mb-1"><a className="reset-anchor" href={"mailto:"+adresse.mail}> <i className="fas text-muted me-2 fa-fw fa-envelope"></i>{adresse.mail}</a></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">               
                                <h2 className="h4 text-white mb-4">Follow me</h2>
                                <ul className="list-inline">
                                    <div className="row text-white text-sm">
                                        <div className="col-6">
                                            <ul className="list-unstyled">
                                            <li><a className="reset-anchor" href="https://www.facebook.com/yameogoivan10"><i className="fab me-2 mb-2 fa-fw fa-facebook-f"></i>Facebook</a></li>
                                            <li><a className="reset-anchor" href="https://www.linkedin.com/in/wendyam-yameogo-89963b163/"><i className="fab me-2 mb-2 fa-fw fa-linkedin"></i>linkedIn</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-dark py-4">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="row text-white">
                                <div className="col-md-6 text-center text-md-start">
                                    <p className="text-sm mb-3 mb-md-0"><span className="text-muted">&copy; All rights reserved - TnT</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}