import React from "react";
import Admin from "../admin";

export default function AdminDashboard(){

    function vue(){
        return (
            <div>
                admin dashboard
            </div>
        )
    }

    return (
        Admin(vue())
    );
}