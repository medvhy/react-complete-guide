import React from 'react';
import PropTypes from 'prop-types';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  const { expenses } = props;

  if (expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }
  return (
    <ul className="expenses-list">
      {
        expenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
          />
        ))
      }
    </ul>
  );
};

ExpensesList.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    amount: PropTypes.number.isRequired,
  })).isRequired,
};

export default ExpensesList;
