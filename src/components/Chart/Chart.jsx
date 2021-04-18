import React from 'react';
import PropTypes from 'prop-types';
import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
  const { dataPoints } = props;
  const dataPointValues = dataPoints.map((dataPoint) => +dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {
        dataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            label={dataPoint.label}
            value={dataPoint.value}
            max={totalMaximum}
          />
        ))
      }
    </div>
  );
};

Chart.propTypes = {
  dataPoints: PropTypes.arrayOf(PropTypes.exact({
    value: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
};

export default Chart;
