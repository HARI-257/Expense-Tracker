import React, { useState, useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const ExpenseForm = () => {
  const { addExpense } = useContext(ExpenseContext);
  const [expense, setExpense] = useState({ title: "", amount: "", category: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!expense.title || !expense.amount) return;
    addExpense({ ...expense, id: Date.now() });
    setExpense({ title: "", amount: "", category: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={expense.title} 
             onChange={(e) => setExpense({ ...expense, title: e.target.value })} />
      <input type="number" placeholder="Amount" value={expense.amount} 
             onChange={(e) => setExpense({ ...expense, amount: e.target.value })} />
      <select value={expense.category} onChange={(e) => setExpense({ ...expense, category: e.target.value })}>
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Health">Health</option>
        <option value="Education">Education</option>
      </select>
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;
