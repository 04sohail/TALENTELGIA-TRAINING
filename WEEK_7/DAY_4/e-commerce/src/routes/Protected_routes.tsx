import React from 'react';
import { Navigate } from 'react-router-dom';
import { useUser } from '../contexts/useUser';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    // const { user } = useAuth();
    const { user } = useUser()
    return user ? children : <Navigate to="/" />;
};
