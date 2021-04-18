import React, { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import './App.css';

const INITIAL_STATE = [
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
  {
    id: 'e3',
    title: 'Brand new book',
    amount: 20.35,
    date: new Date(2020, 5, 25),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_STATE);

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => [...prevState, expense]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
