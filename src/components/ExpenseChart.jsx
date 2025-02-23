import React, { useContext } from "react";
import { Bar } from "react-chartjs-2";
import { ExpenseContext } from "../context/ExpenseContext";
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// ✅ Register necessary components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ExpenseChart = () => {
  const { expenses } = useContext(ExpenseContext);

  const categories = ["Food", "Transport", "Entertainment","Health","Education"];
  const data = categories.map(category => 
    expenses
      .filter(exp => exp.category === category)
      .reduce((sum, exp) => sum + Number(exp.amount), 0)
  );

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <h2>Expense Chart</h2>
      <Bar
        data={{
          labels: categories,
          datasets: [
            {
              label: "Expenses",
              data,
              backgroundColor: ["#ff6384", "#36a2eb", "#ffcd56"]
            }
          ]
        }}
        options={{
          responsive: true,
          maintainAspectRatio: false
        }}
      />
    </div>
  );
};

export default ExpenseChart;
