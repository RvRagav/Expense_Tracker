import React from "react";
import { useExpenses } from "../context/ExpenseContext";
import { useNavigate } from "react-router-dom";

const ExpenseList = () => {
    const { expenses, setExpenses } = useExpenses();
    const navigate = useNavigate();
    const handleDelete = (id) => {
        setExpenses(expenses.filter(expense => expense.id !== id));
    };

    return (
        <div>
            <h2 className="text-success">Total Expenses: ₹{expenses.reduce((total, exp) => total + Number(exp.amount), 0)}</h2>
            <ul  className="list-group">
                {expenses.map((expense) => (
                    <li key={expense.id} className="list-group-item d-flex justify-content-between align-items-center mb-2 mx-auto w-50">
                        <span className="text-emphasis">{expense.name} - ₹{expense.amount} ({expense.category})</span>
                        <button className="btn btn-danger" onClick={() => handleDelete(expense.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <div className="text-center m-4">
                <button className="btn btn-primary m-2 w-25" onClick={() => setExpenses([])}>Clear Expenses</button><br />
                <button className="btn btn-primary m-2 w-25" onClick={() => navigate("/add-expense")}>Add Expense</button>
            </div>
        </div>
    );
};

export default ExpenseList;
