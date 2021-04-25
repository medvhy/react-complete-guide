import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const { onAddToCart } = props;
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;
    if (enteredAmount.trim().length === 0 || +enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      setAmountIsValid(false);
    } else {
      onAddToCart(enteredAmountNumber);
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        id="amount"
        type="number"
        min="1"
        max="5"
        step="1"
        defaultValue="1"
      />
      <button type="submit">+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

MealItemForm.propTypes = {
  onAddToCart: PropTypes.func.isRequired,
};

export default MealItemForm;
