import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminProjet from "../View/Admin/pages/admin_projet";
import AdminCertification from "../View/Admin/pages/admin_certification";
import AdminExperience from "../View/Admin/pages/admin_experience";
import AdminFormation from "../View/Admin/pages/admin_formation";
import AdminMessage from "../View/Admin/pages/admin_message";
import AdminSkill from "../View/Admin/pages/admin_skill";
import All from "../View/all";
import AdminAdresse from "../View/Admin/pages/admin_adresse";
import Login from "../View/Security/login";
import AdminDashboard from "../View/Admin/pages/admin_dashboard";
import About from "../View/about";

export default function Routs(){
    return (
        <Routes>
            <Route path="/" element={<All />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/skill" element={<AdminSkill />} />
            <Route path="/admin/experience" element={<AdminExperience />} />
            <Route path="/admin/certification" element={<AdminCertification />} />
            <Route path="/admin/formation" element={<AdminFormation />} />
            <Route path="/admin/message" element={<AdminMessage />} />
            <Route path="/admin/projet" element={<AdminProjet />} />
            <Route path="/admin/adresse" element={<AdminAdresse />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<All />} />
        </Routes>
    )
}