import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
  const { expenses } = props;
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler} />
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
