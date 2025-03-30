import React from "react";
import ExpenseForm from "../components/ExpenseForm";

const AddExpensePage = () => {
    return (
        <div className="container">
            <ul className="nav nav-tabs nav-fill bg-primary rounded text-white align-items-center">
                <li className="nav-item">
                    <a className="nav-link text-white text-decoration-none p-2"  href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active text-decoration-none p-2" aria-current="page" href="/add-expense">Add Expense</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white text-decoration-none p-2" href="/expenses">Expenses</a>
                </li>
            </ul>
            <div className="container mt-5 mb-5 p-5 bg-light rounded mx-auto" style={{ opacity: "0.9" }}>
                <h1 className="text-center mb-4 display-1 text-primary fw-semibold">Add Expense</h1>
                <ExpenseForm />
            </div>
        </div>
    );
};

export default AddExpensePage;