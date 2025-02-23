import React from "react";
import { ExpenseProvider } from "./context/ExpenseContext";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import ExpenseChart from "./components/ExpenseChart";

const App = () => {
  return (
    <ExpenseProvider>
      <div>
        <h1>Expense Tracker</h1>
        <ExpenseForm />
        <ExpenseList />
        <ExpenseChart />
      </div>
    </ExpenseProvider>
  );
};

export default App;
