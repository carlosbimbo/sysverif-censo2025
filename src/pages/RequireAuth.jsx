import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Login from "../pages/Login";

const RequireAuth = ({ allowedRoles }) => {
    const { auth } = useAuth();
    const location = useLocation();
    console.log('hola uno');
    console.log(auth?.roles);
    console.log('hola dos');
    console.log(allowedRoles);
    console.log('hola tres');
    console.log(auth?.roles?.find(role => allowedRoles?.includes(role)));
    console.log('hola cuatro');
    console.log(auth?.user);
    return (
        auth?.roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : auth?.user
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/Login" state={{ from: location }} replace />
    );
}

export default RequireAuth;