import React from "react"
import Nav from "./component/nav";
import "../../style/assets/vendors/iconly/bold.css";
import "../../style/assets/css/bootstrap.css";
import "../../style/assets/vendors/perfect-scrollbar/perfect-scrollbar.css";
import "../../style/assets/vendors/bootstrap-icons/bootstrap-icons.css";
import "../../style/assets/vendors/simple-datatables/style.css";
import "../../style/assets/css/app.css";
import Footer from "./component/footer";
import Header from "./component/header";



export default function Admin(children){

    const logout=()=>{
        localStorage.clear()
        window.location.assign("/login")
    }

    const isconnected= ()=>{
        if(localStorage.getItem("date") && localStorage.getItem("date")<(new Date()).getDate()){
            return false;
        }
        return localStorage.getItem("admin")!==null
    }

    function Vue() {
        if(isconnected()){
            return <div id="app"> 
            <Nav />
            <div id="main">
                <Header />
                {isconnected() && children}
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