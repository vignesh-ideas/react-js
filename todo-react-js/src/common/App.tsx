import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from '../login/LoginForm.tsx';
import ToDoForm from '../todo/ToDoForm.tsx'; 
import PrivateRoute from './PrivateRoute.tsx'

const App = ({ } : any) => {
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
