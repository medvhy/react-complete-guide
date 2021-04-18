import React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import './App.css';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 3, 28),
    },
    {
      id: 'e2',
      title: 'House Insurance',
      amount: 123.65,
      date: new Date(2021, 2, 4),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log('In app.js');
    console.log(expense);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
