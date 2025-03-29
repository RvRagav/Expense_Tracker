import React from "react";
import  ExpenseList from "../components/ExpenseList";
import  ExpenseChart  from "../components/ExpenseChart";
const ExpenseListPage = () => {
    return (
        <>
            <h2 className="text-center mb-4 display-1 text-primary fw-bold">Expense List</h2>
            <ExpenseList />
            <h2 className="text-center mb-4 display-2 text-primary fw-bold">Visualization</h2>
            <ExpenseChart />
        </>
    )
}
export default ExpenseListPage