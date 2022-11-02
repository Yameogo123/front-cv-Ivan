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

export default function Routs(){
    return (
        <Routes>
            <Route path="/resume" element={<All />} />
            <Route path="/resume/admin" element={<AdminDashboard />} />
            <Route path="/resume/admin/skill" element={<AdminSkill />} />
            <Route path="/resume/admin/experience" element={<AdminExperience />} />
            <Route path="/resume/admin/certification" element={<AdminCertification />} />
            <Route path="/resume/admin/formation" element={<AdminFormation />} />
            <Route path="/resume/admin/message" element={<AdminMessage />} />
            <Route path="/resume/admin/projet" element={<AdminProjet />} />
            <Route path="/resume/admin/adresse" element={<AdminAdresse />} />
            <Route path="/resume/login" element={<Login />} />
        </Routes>
    )
}