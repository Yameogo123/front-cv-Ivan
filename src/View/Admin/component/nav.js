import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../style/assets/images/logo/logo.png"


export default function Nav(){

    const logout=()=>{
        localStorage.clear();
        window.location.reload()
    }

    return (
        <div id="sidebar" className="active">
            <div className="sidebar-wrapper active">
                <div className="sidebar-header">
                    <div className="d-flex justify-content-between">
                        <div className="logo">
                            <a href="/"><img src={logo} alt="Logo" srcSet="" /></a>
                        </div>
                        <div className="toggler">
                            <button className="btn sidebar-hide d-xl-none d-block" onClick={()=>{
                                document.getElementById('sidebar').classList.toggle('active');
                            }}><i className="bi bi-x bi-middle"></i></button>
                        </div>
                    </div>
                </div>
                <div className="sidebar-menu">
                    <ul className="menu">
                        <li className="sidebar-title">Menu</li>

                        <li className="sidebar-item active">
                            <a href="/" className='sidebar-link'>
                                <i className="bi bi-grid-fill"></i>
                                <span>Front</span>
                            </a>
                        </li>

                        <li className="sidebar-item active">
                            <Link to={"/admin/skill"} className='sidebar-link'>
                                <i className="bi bi-stack"></i>
                                <span>Skills</span>
                            </Link>
                        </li>

                        <li className="sidebar-item active">
                            <Link to={"/admin/message"} className='sidebar-link'>
                                <i className="bi bi-collection-fill"></i>
                                <span>Message</span>
                            </Link>
                        </li>

                        <li className="sidebar-item active">
                            <Link to={"/admin/experience"} className='sidebar-link'>
                                <i className="bi bi-grid-1x2-fill"></i>
                                <span>Expérience</span>
                            </Link>
                        </li>

                        <li className="sidebar-item active">
                            <Link to={"/admin/certification"} className='sidebar-link'>
                                <i className="bi bi-hexagon-fill"></i>
                                <span>Certifications</span>
                            </Link>
                        </li>

                        <li className="sidebar-item active">
                            <Link to={"/admin/formation"} className='sidebar-link'>
                                <i className="bi bi-hexagon-fill"></i>
                                <span>formation</span>
                            </Link>
                        </li>

                        <li className="sidebar-item active">
                            <Link to={"/admin/projet"} className='sidebar-link'>
                                <i className="bi bi-hexagon-fill"></i>
                                <span>Projects</span>
                            </Link>
                        </li>

                        <li className="sidebar-item active">
                            <Link to={"/admin/adresse"} className='sidebar-link'>
                                <i className="bi bi-hexagon-fill"></i>
                                <span>Adresse</span>
                            </Link>
                        </li>

                        <li className="sidebar-item active">
                            <button onClick={()=>logout()} className='sidebar-link btn btn-warning'>
                                <i className="bi bi-logout-fill"></i>
                                <span>déconnexion</span>
                            </button>
                        </li>

                    </ul>
                </div>
                <button className="sidebar-toggler btn x" onClick={()=>{
                                document.getElementById('sidebar').classList.toggle('active');
                            }}><i data-feather="x"></i></button>
            </div>
        </div>
    );
}

    