import React from "react";
import { Link } from "react-router-dom";

export default function Nav(){

    return (
        <div>
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
                <ul className="nav">
                    <li className="nav-item nav-profile border-bottom">
                        <div className="nav-link flex-column">
                            <div className="nav-profile-image">
                                <img src="../assets/images/faces/face1.jpg" alt="profile" />
                            </div>
                            <div className="nav-profile-text d-flex ms-0 mb-3 flex-column">
                                <span className="font-weight-semibold mb-1 mt-2 text-center">YAMEOGO Wendyam M. Ivan</span>
                                <span className="text-secondary icon-sm text-center"></span>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to={"/resume/admin"} className="nav-link">
                            <i className="mdi mdi-brightness-1 menu-icon"></i>
                            <span className="menu-title">Dashboard</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/resume/admin/skill"} className="nav-link">
                             <i className="mdi mdi-brightness-1 menu-icon"></i>
                            <span className="menu-title">Skills</span>       
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/resume/admin/experience"} className="nav-link">
                             <i className="mdi mdi-brightness-1 menu-icon"></i>
                            <span className="menu-title">Expérience</span>       
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/resume/admin/certification"} className="nav-link">
                             <i className="mdi mdi-brightness-1 menu-icon"></i>
                            <span className="menu-title">Certifications</span>       
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/resume/admin/formation"} className="nav-link">
                             <i className="mdi mdi-brightness-1 menu-icon"></i>
                            <span className="menu-title">formation</span>       
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/resume/admin/projet"} className="nav-link">
                             <i className="mdi mdi-brightness-1 menu-icon"></i>
                            <span className="menu-title">Projects</span>       
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to={"/resume/admin/adresse"} className="nav-link">
                             <i className="mdi mdi-brightness-1 menu-icon"></i>
                            <span className="menu-title">Adresse</span>       
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="container-fluid page-body-wrapper">
                <div id="settings-trigger"><i className="mdi mdi-settings"></i></div>
                <div id="theme-settings" className="settings-panel">
                    <i className="settings-close mdi mdi-close"></i>
                    <p className="settings-heading">SIDEBAR SKINS</p>
                    <div className="sidebar-bg-options selected" id="sidebar-default-theme">
                        <div className="img-ss rounded-circle bg-light border me-3"></div>Default
                    </div>
                    <div className="sidebar-bg-options" id="sidebar-dark-theme">
                        <div className="img-ss rounded-circle bg-dark border me-3"></div>Dark
                    </div>
                    <p className="settings-heading mt-2">HEADER SKINS</p>
                    <div className="color-tiles mx-0 px-4">
                        <div className="tiles default primary"></div>
                        <div className="tiles success"></div>
                        <div className="tiles warning"></div>
                        <div className="tiles danger"></div>
                        <div className="tiles info"></div>
                        <div className="tiles dark"></div>
                        <div className="tiles light"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}