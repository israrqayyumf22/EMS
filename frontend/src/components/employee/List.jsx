import React from "react";
import  { Link } from 'react-router-dom'
const List = () => {
    return (
        <div className="p-6">
            <div className="text-center mb-4">
                <h3 className="text-2xl font-bold">Manage  Employees</h3>
            </div>
            <div className="flex justify-between items-center">
                <input
                    type="text"
                    placeholder="Search by Dep name"
                    className="px-4 py-2 border rounded"
                />
                <Link
                    to="/admin-dashboard/add-employee"
                    className="px-4 py-2 bg-teal-600 text-white rounded"
                >
                    Add New Employee
                </Link>
            </div>
        </div>
    )
}

export default List


// import React from "react";

// const List = () => {
//     return (
//         <div>List</div>
//     )
// }

// export default List