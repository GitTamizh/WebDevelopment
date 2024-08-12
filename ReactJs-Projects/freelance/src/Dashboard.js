import React from "react";
import { useUser } from "./UserContext";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Dashboard = () => {
  const { user } = useUser(); // Access the user data from context

    // if (!user) {
    //     return <p>Please log in to view the dashboard.</p>;
    // }

    return (
        <div className="dashboard">
        {/* <h1>Welcome, {user.name}!</h1> */}
        <p>
            Here is your dashboard where you can view your activities, settings, and
            more.
        </p>
        <div className="dashboard-content">
            <section>
            <Link to="/userList" style={{textDecoration: 'none' }}><h2>Users</h2></Link>
            <p>List of users will be displayed here.</p>
            </section>
            <section>
            <h2>Profile Settings</h2>
            <p>Manage your profile settings here.</p>
            </section>
        </div>
        </div>
    );
};

export default Dashboard;
