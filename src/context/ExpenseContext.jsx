import React, { createContext, useState, useEffect, useContext } from "react";

const ExpenseContext = createContext();

export const ExpenseProvider = ({ children }) => {
    const [expenses, setExpenses] = useState(() => {
        return JSON.parse(localStorage.getItem("expenses")) || [];
    });

    useEffect(() => {
        localStorage.setItem("expenses", JSON.stringify(expenses));
    }, [expenses]);

    return (
        <ExpenseContext.Provider value={{ expenses, setExpenses }}>
            {children}
        </ExpenseContext.Provider>
    );
};

export const useExpenses = () => useContext(ExpenseContext);
