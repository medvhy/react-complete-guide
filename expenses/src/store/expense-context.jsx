import React from 'react';

const ExpenseContext = React.createContext({
  expenses: [
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
  ],
  onAddExpense: () => {},
});

export default ExpenseContext;
