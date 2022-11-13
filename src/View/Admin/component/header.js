import React from "react";

export default function Header(){

    return (
      <header className="mb-3">
        <button className="btn burger-btn d-block d-xl-none" onClick={()=>{
            document.getElementById('sidebar').classList.toggle('active');
        }}>
            <i className="bi bi-justify fs-3"></i>
        </button>
      </header>
 
    );
}