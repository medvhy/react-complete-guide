import React, { useState, useContext } from 'react';
import Card from '../UI/Card';
import ExpenseContext from '../../store/expense-context';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';
import './Expenses.css';

const Expenses = () => {
  const expenseContext = useContext(ExpenseContext);
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenseContext.expenses.filter((expense) => {
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

export default Expenses;
