import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from '../login/LoginForm';
import ToDoForm from '../todo/ToDoForm'; 
import PrivateRoute from './PrivateRoute'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/todo" element={<PrivateRoute><ToDoForm /></PrivateRoute>} />
      </Routes>
    </Router>
  );
};

export default App;
