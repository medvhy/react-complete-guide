import React from 'react';
import PropTypes from 'prop-types';
import './ChartBar.css';

const ChartBar = (props) => {
  const { value, max, label } = props;

  let barFillHeight = '0%';
  if (max > 0) {
    barFillHeight = `${Math.round((value / max) * 100)}%`;
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: barFillHeight }} />
      </div>
      <div className="chart-bar__label">{ label }</div>
    </div>
  );
};

ChartBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
};

export default ChartBar;
