import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';
import './Expenses.css';

const Expenses = (props) => {
  const { expenses } = props;
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    const fullYear = expense.date.getFullYear();
    return fullYear.toString() === filteredYear;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList expenses={filteredExpenses} />
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
