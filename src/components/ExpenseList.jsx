import React, { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

const ExpenseList = () => {
  const { expenses } = useContext(ExpenseContext);

  return (
    <div>
      <h2>Expense List</h2>
      {expenses.length === 0 ? <p>No expenses added yet.</p> : (
        <ul>
          {expenses.map((expense) => (
            <li key={expense.id}>
              {expense.title} - ${expense.amount} ({expense.category})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ExpenseList;
