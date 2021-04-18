import React from 'react';
import PropTypes from 'prop-types';
import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const { selectedYear, onChangeFilter } = props;

  const changeFilterHandler = (event) => {
    onChangeFilter(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label htmlFor="filter">
          Filter by year
          <select name="filter" value={selectedYear} onChange={changeFilterHandler}>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
          </select>
        </label>
      </div>
    </div>
  );
};

ExpensesFilter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
  selectedYear: PropTypes.string.isRequired,
};

export default ExpensesFilter;
