import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Profile from './pages/Profile';
import ProjectDetail from './pages/ProjectDetail';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="contact" element={<Contact />} />
                </Route>
                <Route path="/project/:id" element={<ProjectDetail />} />
            </Routes>
        </Router>
    );
};

export default App;
