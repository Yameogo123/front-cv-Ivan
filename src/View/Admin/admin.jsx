import React from "react"
import Header from "./component/header";
import Nav from "./component/nav";
import "../../style/assets/vendors/flag-icon-css/css/flag-icon.min.css";
import "../../style/assets/vendors/css/vendor.bundle.base.css";
import "../../style/assets/vendors/jquery-bar-rating/css-stars.css";
import "../../style/assets/vendors/font-awesome/css/font-awesome.min.css";
import "../../style/assets/css/demo_1/style.css";
import "../../style/assets/images/favicon.png";
import "../../style/assets/vendors/mdi/css/materialdesignicons.min.css";
import Footer from "./component/footer";


export default function Admin(children){

    const logout=()=>{
        localStorage.clear()
        window.location.assign("/resume/login")
    }

    const isconnected= ()=>{
        if(localStorage.getItem("date") && localStorage.getItem("date")<(new Date()).getDate()){
            return false;
        }
        return localStorage.getItem("admin")!==null
    }

    function Vue() {
        if(isconnected()){
            return <div className="container-scroller"> 
            <Header />
            <Nav />
            <div className="main-panel">
                <div className="content-wrapper pb-0">
                    <div className="page-header flex-wrap col-lg-10">
                        <div className="header-left">
                            <button className="btn btn-danger mb-2 mb-md-0 me-2" onClick={logout}>Log out</button>
                        </div>
                        <div className="header-right d-flex flex-wrap mt-2 mt-sm-0">
                            <div className="d-flex align-items-center">
                                <a href="/resume">
                                    <p className="m-0 pe-3">Home</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    {isconnected() && children}
                </div>
                <Footer />
            </div>
        </div>
        }
        return logout();
    }
    //localStorage.clear()
    //console.log(JSON.parse(localStorage.getItem("admin"))["username"])

    return (
        Vue()
    )
}