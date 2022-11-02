import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getUser } from "../back/controller";

export default function Expertise(){

    const [user, setUser]= useState({})

    useEffect(()=>{
        getUser("user").then((rs)=>{
            setUser(rs.user)
        }).catch(()=>{
            setUser({
                "bio": "développeur",
                "souhait": "",
                "poste": ""
            })
        })
    }, [])

    return (
        <section className="expertise-wrapper section-wrapper gray-bg">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-title">
                            <h2>Statut</h2>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <div className="expertise-item">
                            <h3>{user.souhait}</h3>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}