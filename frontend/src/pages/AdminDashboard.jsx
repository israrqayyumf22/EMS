import React from "react";
import { useAuth } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import AdminSideBar from '../components/dashboard/AdminSideBar';


const AdminDashboard = () => {
    const {user} = useAuth()
    
    return (
        <div>

        </div>
    )
}
export default AdminDashboard