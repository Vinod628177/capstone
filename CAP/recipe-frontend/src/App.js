import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route} from "react-router-dom";
import Login from './components/Login';
import Signup from './components/Signup';
import DashboardComponent from './components/Dashboard/Dashboard';
import UserProfile from './components/Userprofile';
import Recipe from './components/Recipe';
import Header from './components/Header/Header';
import DashboardPage from './components/DashboardPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/recipe/:recipeId" element={<Recipe />} />
          <Route path="/header" element={<Header />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
