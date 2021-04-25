import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const { onSaveExpenseData, onCancel } = props;

  const [typingMessage, setTypingMessage] = useState('');
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const inputChangeHandler = (event) => {
    setUserInput((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    onSaveExpenseData(userInput);
  };

  useEffect(() => {
    const identifier = setTimeout(() => {
      setTypingMessage('');
    }, 1500);

    return () => {
      setTypingMessage('The user is typing a new expense');
      clearTimeout(identifier);
    };
  }, [userInput]);

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">
            Title
            <input type="text" name="title" value={userInput.title} onChange={inputChangeHandler} />
          </label>
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">
            Amount
            <input type="number" name="amount" min="0.01" step="0.01" value={userInput.amount} onChange={inputChangeHandler} />
          </label>
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">
            Date
            <input type="date" name="date" min="2019-01-01" max="2020-12-31" value={userInput.date} onChange={inputChangeHandler} />
          </label>
        </div>
      </div>
      <div className="new-expense__actions">
        <p>{typingMessage}</p>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

ExpenseForm.propTypes = {
  onSaveExpenseData: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default ExpenseForm;
