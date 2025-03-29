import React from "react";
import  ExpenseForm  from "../components/ExpenseForm";

const AddExpensePage = () => {
    return (
        <div>
            <h1 className="text-center mb-4 display-1 text-primary fw-bold">Add Expense</h1>
            <ExpenseForm />
        </div>
    );
};

export default AddExpensePage;