import React from "react";
import { useAuth } from "../context/authContext";
import AdminSideBar from '../components/dashboard/AdminSideBar';
import Navbar from "../components/dashboard/Navbar";
import AdminSummary from "../components/dashboard/AdminSummary"
import { Outlet } from "react-router-dom";

const AdminDashboard = () => {
    const { user } = useAuth(); // Get user info from the context
    
    return (
        <div className="flex">
            {/* Pass the user prop to AdminSideBar */}
            <AdminSideBar />
            <div className="flex-1 ml-64 bg-gray-100 h-screen"> 
                <Navbar />
                <Outlet/>
            </div>

        </div>
    );
}

export default AdminDashboard;
