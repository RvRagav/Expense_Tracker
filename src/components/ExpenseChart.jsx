import React, { useEffect, useRef } from "react";
import { Pie } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import { useExpenses } from "../context/ExpenseContext";

Chart.register(ArcElement, Tooltip, Legend);

const ExpenseChart = () => {
    const { expenses } = useExpenses();
    const chartRef = useRef(null);

    useEffect(() => {
        return () => {
            if (chartRef.current) {
                chartRef.current.destroy(); 
            }
        };
    }, []);

    const categories = [...new Set(expenses.map(exp => exp.category))];

    const data = {
        labels: categories,
        datasets: [
            {
                data: categories.map(cat =>
                    expenses.filter(exp => exp.category === cat)
                        .reduce((acc, curr) => acc + Number(curr.amount), 0)
                ),
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            },
        ],
    };

    return <Pie ref={chartRef} data={data} options={{ responsive: true }} className="mx-auto w-50 h-50" />;
};

export default ExpenseChart;
