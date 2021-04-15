import React from 'react';
import PropTypes from 'prop-types';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
  const { expenses } = props;
  return (
    <Card className="expenses">
      {expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
          key={expense.id}
        />
      ))}
    </Card>
  );
};

Expenses.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    amount: PropTypes.number.isRequired,
  })).isRequired,
};

export default Expenses;
