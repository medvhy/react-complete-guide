import React from 'react';
import PropTypes from 'prop-types';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const { onAddExpense } = props;
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      date: new Date(enteredExpenseData.date),
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

NewExpense.propTypes = {
  onAddExpense: PropTypes.func.isRequired,
};

export default NewExpense;
