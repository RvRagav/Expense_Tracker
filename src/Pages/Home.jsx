import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="container ">
            <ul className="nav nav-tabs nav-fill bg-primary rounded text-white align-items-center">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white text-decoration-none p-2"  href="/add-expense">Add Expense</a>
                </li>
                <li className="nav-item">
                   <a className="nav-link text-white text-decoration-none p-2" href="/expenses">Expenses</a>
                </li>

            </ul>
            <div className="container mt-5 mb-5 p-4 "
                style={{ border: "1px solid #ccc", borderRadius: "10px", padding: "20px", background: "#f5f5f5", opacity: "0.9" }}
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
        </div>
    );
};

export default Home;
