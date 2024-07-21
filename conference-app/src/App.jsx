import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ConferencesPage from './pages/ConferencesPage';
import ConferenceDetailsPage from './pages/ConferenceDetailsPage';
import AdminConferencesPage from './pages/AdminConferencesPage';
import AdminUsersPage from './pages/AdminUsersPage';
import NavBar from './components/NavBar';
import './App.css';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/conferences" element={<ConferencesPage />} />
        <Route path="/conference/:id" element={<ConferenceDetailsPage />} />
        <Route path="/admin/conferences" element={<AdminConferencesPage />} />
        <Route path="/admin/users" element={<AdminUsersPage />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;

