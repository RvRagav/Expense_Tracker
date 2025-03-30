import React, { useState } from "react";
import { useExpenses } from "../context/ExpenseContext";
import { useNavigate } from "react-router-dom";

const ExpenseForm = () => {
    const { expenses, setExpenses } = useExpenses();
    const [expense, setExpense] = useState({ name: "", amount: "", category: "", date: "" });
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setExpenses([...expenses, { ...expense, id: Date.now() }]);
        navigate("/expenses"); // Redirect to list page
    };

    return (
        <div className="container mt-3 mb-5 p-3 bg-light">
            <form onSubmit={handleSubmit} className="p-4 border rounded  mx-auto">
                <input type="text" className="form-control m-3" placeholder="Expense Name" required value={expense.name}
                    onChange={(e) => setExpense({ ...expense, name: e.target.value })} />

                <input type="number" className="form-control m-3" placeholder="Amount" required value={expense.amount}
                    onChange={(e) => setExpense({ ...expense, amount: e.target.value })} />

                <select className="form-control m-3" required value={expense.category}
                    onChange={(e) => setExpense({ ...expense, category: e.target.value })}>
                    <option value="">Select Category</option>
                    <option value="Food">Food</option>
                    <option value="Rent">Rent</option>
                    <option value="Entertainment">Entertainment</option>
                    <option value="Groceries">Groceries</option>
                </select>

                <input type="date" className="form-control m-3" required value={expense.date}
                    onChange={(e) => setExpense({ ...expense, date: e.target.value })} />

                <button type="submit" className="btn btn-primary">Add Expense</button>
            </form>
        </div>
    );
};

export default ExpenseForm;
