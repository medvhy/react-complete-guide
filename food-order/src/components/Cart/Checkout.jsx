import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import classes from './Checkout.module.css';

const isEmpty = (value) => value.trim() === '';
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const { onConfirmOrder, onCancel } = props;
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalCodeIsValid = isFiveChars(enteredPostalCode);
    const enteredCityIsValid = !isEmpty(enteredCity);
    const isFormValid = enteredNameIsValid
        && enteredStreetIsValid
        && enteredPostalCodeIsValid
        && enteredCityIsValid;

    setFormInputValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postalCode: enteredPostalCodeIsValid,
      city: enteredCityIsValid,
    });

    if (isFormValid) {
      onConfirmOrder({
        name: enteredName,
        street: enteredStreet,
        postalCode: enteredPostalCode,
        city: enteredCity,
      });
    }
  };

  return (
    <form onSubmit={confirmHandler}>
      <div className={`${classes.control} ${formInputValidity.name ? '' : classes.invalid}`}>
        <label htmlFor="name">
          Your Name
          <br />
          <input id="name" name="name" type="text" ref={nameInputRef} />
        </label>
        { !formInputValidity.name && <p>Please enter a valid name!</p> }
      </div>
      <div className={`${classes.control} ${formInputValidity.street ? '' : classes.invalid}`}>
        <label htmlFor="street">
          Street
          <br />
          <input type="text" id="street" name="street" ref={streetInputRef} />
        </label>
        { !formInputValidity.street && <p>Please enter a valid street!</p> }
      </div>
      <div className={`${classes.control} ${formInputValidity.postalCode ? '' : classes.invalid}`}>
        <label htmlFor="postal">
          Postal Code
          <br />
          <input type="text" id="postal" name="postal" ref={postalInputRef} />
        </label>
        { !formInputValidity.postalCode
            && <p>Please enter a valid postal code (5 characters long)!</p> }
      </div>
      <div className={`${classes.control} ${formInputValidity.city ? '' : classes.invalid}`}>
        <label htmlFor="city">
          City
          <br />
          <input type="text" id="city" name="city" ref={cityInputRef} />
        </label>
        { !formInputValidity.city && <p>Please enter a valid city!</p> }
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

Checkout.propTypes = {
  onConfirmOrder: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default Checkout;
