import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const { onAddExpense } = props;
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
    onAddExpense(expenseData);
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

NewExpense.propTypes = {
  onAddExpense: PropTypes.func.isRequired,
};

export default NewExpense;
