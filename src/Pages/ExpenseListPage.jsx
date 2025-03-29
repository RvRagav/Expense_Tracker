import React from "react";
import ExpenseList from "../components/ExpenseList";
import ExpenseChart from "../components/ExpenseChart";
const ExpenseListPage = () => {
    return (
        <>
            <div className="container">
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
        </>
    )
}
export default ExpenseListPage