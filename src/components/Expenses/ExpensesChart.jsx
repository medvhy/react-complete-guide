import React from 'react';
import PropTypes from 'prop-types';
import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {
  const { expenses } = props;
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ];

  expenses.forEach((expense) => {
    const expenseMonth = expense.date.getMonth();
    chartDataPoints[expenseMonth].value += expense.amount;
  });

  return <Chart dataPoints={chartDataPoints} />;
};

ExpensesChart.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    amount: PropTypes.number.isRequired,
  })).isRequired,
};

export default ExpensesChart;
