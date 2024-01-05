import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import UsersTable from './components/UsersTable';
import SignupForm from './components/SignupForm';
import ProtectedRoute from './protectedRoute/ProtectedRoute';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/" element={ <ProtectedRoute><UsersTable /></ProtectedRoute>}
        />
      </Routes>
    </Router>
  );
}

export default App;
