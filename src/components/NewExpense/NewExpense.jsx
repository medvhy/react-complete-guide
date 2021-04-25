import React, { useState, useContext } from 'react';
import ExpenseContext from '../../store/expense-context';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = () => {
  const expenseContext = useContext(ExpenseContext);
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      date: new Date(enteredExpenseData.date),
      amount: +enteredExpenseData.amount,
      id: Math.random().toString(),
    };
    expenseContext.onAddExpense(expenseData);
    stopEditingHandler();
  };

  return (
    <div className="new-expense">
      { !isEditing && <button type="button" onClick={startEditingHandler}>Add New Expense</button> }
      { isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={stopEditingHandler}
        />
      ) }
    </div>
  );
};

export default NewExpense;
