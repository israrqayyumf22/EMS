import React from "react";
import { NavLink } from "react-router-dom";
import { FaTachometerAlt } from 'react-icons/fa';



const AdminSideBar = () => {
    return (
        <div>
            <div>
                <h3>Employee MS</h3>
            </div>
            <div>
                <NavLink to="/admin-dashboard">
                <FaTachometerAlt/>
                <span>Dashboard</span>
                </NavLink>
            </div>
        </div>
    )
  };
  
  export default AdminSideBar;
  