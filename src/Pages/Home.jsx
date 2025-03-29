import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container mt-5 mb-5"
            style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "20px", background: "#f5f5f5" }}
        >
            <h1 className="text-center mb-4 display-1 text-primary fw-bold">Expense Tracker</h1>
            <p className="text-center">
                This is a simple expense tracker. You can add expenses and view all of them.
            </p>

            <button className="btn btn-primary">
                <Link to="/add-expense" className="text-white text-decoration-none p-2 mb-2">Add Expense</Link>
            </button><br /><br />
            <button className="btn btn-primary">
                <Link to="/expenses" className="text-white text-decoration-none p-2">View Expenses</Link>
            </button>
        </div>
    );
};

export default Home;
