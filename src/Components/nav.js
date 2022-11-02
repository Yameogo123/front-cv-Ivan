import React from "react"
import { useEffect } from "react";
import { useState } from "react";
import { getUser } from "../back/controller";

export default function Nav(){

    const [user, setUser]= useState({})

    useEffect(()=>{
        getUser("user").then((rs)=>{
            setUser(rs.user)
        }).catch((err)=>{
            console.log(err);
            setUser({
                "bio": "développeur",
                "souhait": "",
                "poste": ""
            })
        })
    }, [])

    return (
        <div className="left-col-block blocks">
            <header className="header theiaStickySidebar">
                <div className="profile-img">
                    <img src="img/0001.jpg" className="img-responsive" alt=""/>
                </div>
                <div className="content">
                    <h1>Wendyam Maximilien Ivan YAMEOGO</h1>
                    <span className="lead">{user.poste}</span>

                    <div className="about-text">
                        <p>
                            {user.bio}
                        </p>

                    </div>


                    <ul className="social-icon">
                        <li><a href="https://www.facebook.com/yameogoivan10" target="_blank" rel="noreferrer"><i className="fa fa-facebook" aria-hidden="true"></i> </a></li>
                        <li><a href="https://www.linkedin.com/in/wendyam-yameogo-89963b163/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin" aria-hidden="true"></i> </a></li>
                        <li><a href="https://github.com/Yameogo123" target="_blank" rel="noreferrer"><i className="fa fa-github" aria-hidden="true"></i> </a></li>
                    </ul>
                </div>

            </header>
        </div>
    )
}