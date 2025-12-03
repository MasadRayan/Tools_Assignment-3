import React from 'react';
import useAuth from '../Hooks/useAuth';
import PageLoader from '../components/PageLoader';
import { Navigate } from 'react-router';

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();

    if (loading) {
        return <PageLoader></PageLoader>
    }

    if (user) {
        return children;
    }

    return <Navigate state={{from: location.pathname}} to="/login"></Navigate>
};

export default PrivateRoute;