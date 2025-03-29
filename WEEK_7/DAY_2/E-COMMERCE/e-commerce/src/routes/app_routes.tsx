import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Landing_Page from '../pages/Landing_Page';
import { ProtectedRoute } from './Protected_routes.tsx';
import { routesConfig } from './Route_Config';
import Invalid_Route from '../pages/Invalid_Route.tsx';
import Signup from '../pages/Sign_Up.tsx';

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* Public Routes */}
                <Route path={routesConfig.login} element={<Login />} />
                <Route path={routesConfig.signup} element={<Signup />} />
                {/* Protected Routes */}
                <Route path={routesConfig.landing} element={<Landing_Page />} />
                {/* Route For Invalid URL's */}
                <Route path={routesConfig.random} element={<Invalid_Route />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
