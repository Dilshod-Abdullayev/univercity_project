import React from 'react';
import { Routes, Route } from "react-router-dom";
import Layout from '../components/Layout';
import Main from '../components/Main';
import About from '../pages/About/About';
import ContactPage from '../pages/Contact/ContactPage';
import News from '../pages/News/News';
import NotFound from '../components/NotFound';
const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Main />} />
                <Route path='about' element={<About />} />
                <Route path='contact' element={<ContactPage/>} />
                <Route path='news' element={<News/>} />
                <Route path='*' element={<NotFound/>} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;