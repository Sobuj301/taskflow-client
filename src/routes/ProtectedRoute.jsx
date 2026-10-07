import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation()
    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-3 bg-base-200/50">
                <span className="loading loading-spinner loading-lg text-primary"></span>
                <p className="text-sm font-medium text-base-content/70 animate-pulse">
                    Loading, please wait...
                </p>
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/login" state={location.pathname} replace></Navigate>
    }
    return children;
};

export default ProtectedRoute;