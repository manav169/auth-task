// src/components/Dashboard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userInfo");
    navigate("/login");
  };

  return (
    <div className="dashboard-container">
      {userInfo ? (
        <div className="dashboard-card">
          <img
            src={userInfo.image}
            alt={userInfo.firstName}
            className="dashboard-img"
          />
          <h3 className="dashboard-title">
            {userInfo.firstName} {userInfo.lastName}
          </h3>
          <p className="dashboard-text">Email: {userInfo.email}</p>
          <p className="dashboard-text">Username: {userInfo.username}</p>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <p>No user info available</p>
      )}
    </div>
  );
};

export default Dashboard;
