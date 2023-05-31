import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [newExpense, setNewExpense] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseDate) => {
    const expenseData = {
      ...enteredExpenseDate,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setNewExpense(false);
  };

  const addNewExpenseHandler = () => {
    setNewExpense(true);
  };

  let addNewExpense;
  if (newExpense) {
    addNewExpense = (
      <ExpenseForm
        onNewExpense={newExpense}
        changeValue={setNewExpense}
        onSaveExpenseData={saveExpenseDataHandler}
      />
    );
  }

  return (
    <div className="new-expense">
      {addNewExpense}
      {!newExpense && (
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
