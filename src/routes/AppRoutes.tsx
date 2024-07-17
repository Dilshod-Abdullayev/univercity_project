import React from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from '../components/Layout';
import Main from '../components/Main';
const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Main />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;