import React from 'react';
import Expenses from './components/Expenses';
import './App.css';

function App() {
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
  return (
    <div>
      <h2>Test</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
