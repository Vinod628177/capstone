import React from "react";
import Dashboard from "./Dashboard/Dashboard";
import Header from "./Header/Header";

const DashboardPage = () => {
    return(
        <div className="dashboard-page">
      <Header />
      <Dashboard />
    </div>   
    )
}

export default DashboardPage;