import React from "react";
import ExpenseList from "../components/ExpenseList";
import ExpenseChart from "../components/ExpenseChart";
const ExpenseListPage = () => {
    return (
        <div className="container">
            <ul className="nav nav-tabs nav-fill bg-primary rounded text-white align-items-center">
                <li className="nav-item">
                    <a className="nav-link text-white text-decoration-none p-2" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white text-decoration-none p-2" aria-current="page" href="/add-expense">Add Expense</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link active text-decoration-none p-2" aria-current="page" href="/expenses">Expenses</a>
                </li>
            </ul>
            <div className="container mt-3 mb-5 p-3 bg-light rounded mx-auto" style={{ opacity: "0.9" }}>
                <div className="row">
                    <div className="col-md-6 col-sm-12 bg-light">
                        <h2 className="text-center mb-4 display-2 fw-semibold text-primary-emphasis bg-primary-subtle border border-primary-subtle rounded-3 p-3">Expense List</h2>
                        <ExpenseList />
                    </div>
                    <div className="col-md-6 col-sm-12 bg-light">
                        <h2 className="text-center mb-4 display-2 text-primary-empasis fw-semibold bg-primary-subtle border border-primary-subtle rounded-3 p-3">Visualization</h2>
                        <ExpenseChart />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ExpenseListPage