import react from 'react'
import { useAuth } from '../context/authContext'
import { Navigate } from 'react-router-dom'

const RoleBaseRoutes = ({children, requiredRole}) => {
    const {user,loading} = useAuth()
    if(loading){
        return <div>Loading ....</div>
    }
    if(!requiredRole.includes(user.role)){
        return <Navigate to="/unauthorized"/>
    }
    return user ? children : <Navigate to ="/login"/>
    console.log("User in RoleBaseRoutes:", user);

}
export default RoleBaseRoutes