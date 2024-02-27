import { Route, Routes } from "react-router-dom"
import Signup from "./Signup.jsx"
import "../index.css";
import Signin from "./Signin.jsx"
import Dashboard from "./Dashboard.jsx"
import { Navigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function AppRoute() {

    const location = useLocation();
    const [isAuthenticated, setIsAuthenticated] = useState(null);
  
    useEffect(() => {
      const jwt = localStorage.getItem('authToken');
      console.log(jwt);
  
      if (!jwt) {
        setIsAuthenticated(false);
        return;
      }
  
      const config = {
        headers: { Authorization: `Bearer ${jwt}` }
      };
  
      fetch('http://localhost:3000/api/v1/user/verify', {
        method: 'POST',
        headers: config.headers,
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Token verification failed');
        }
        setIsAuthenticated(true);
      })
      .catch(error => {
        console.error(error);
        setIsAuthenticated(false);
      });
    }, []);
  
    if (isAuthenticated === null) {
      return <div>Loading...</div>; // or a loading spinner
    }
  
    return (
      <Routes>
        <Route path="/" element={isAuthenticated ? <Navigate to="/dashboard" replace state={{ from: location }} /> : <Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/send" element={<SendMoney />} />  */}
      </Routes>
    );
  }