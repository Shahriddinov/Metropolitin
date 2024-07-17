import { useSelector } from 'react-redux';
import {Navigate} from "react-router";
import {Route, Routes} from "react-router-dom";

const ProtectedRoute = ({ element: Component, role, ...rest }) => {
    const { user } = useSelector((state) => state.LoginSlice);

    if (!user || user.role !== role) {
        return <Navigate to="/" />; // Update to your desired fallback route
    }

    return (
        <Routes>
            <Route {...rest} element={<Component />} />
        </Routes>
    );
};

export default ProtectedRoute;