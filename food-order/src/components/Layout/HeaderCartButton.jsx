import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import CartContext from '../../store/cart-context';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const { onClick } = props;
  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);
  const cartContext = useContext(CartContext);
  const { items } = cartContext;
  const numberOfItems = items
    .reduce((currentNumber, item) => currentNumber + item.amount, 0);

  const btnClasses = `${classes.button} ${buttonIsHighlighted && classes.bump}`;

  useEffect(() => {
    if (items.length === 0) {
      return () => {};
    }
    setButtonIsHighlighted(true);
    const identifier = setTimeout(() => {
      setButtonIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(identifier);
    };
  }, [items]);

  return (
    <button type="button" className={btnClasses} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{ numberOfItems }</span>
    </button>
  );
};

HeaderCartButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default HeaderCartButton;
