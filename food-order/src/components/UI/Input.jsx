import React from 'react';
import PropTypes from 'prop-types';
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  const {
    label, id, type, min, max, step, defaultValue,
  } = props;

  return (
    <div className={classes.input}>
      <label htmlFor={id}>{ label }</label>
      <input
        id={id}
        type={type}
        min={min}
        max={max}
        step={step}
        defaultValue={defaultValue}
        ref={ref}
      />
    </div>
  );
});

Input.defaultProps = {
  min: '',
  max: '',
  step: '',
  defaultValue: '',
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  min: PropTypes.string,
  max: PropTypes.string,
  step: PropTypes.string,
  defaultValue: PropTypes.string,
};

export default Input;
