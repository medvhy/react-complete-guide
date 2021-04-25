import React from 'react';
import PropTypes from 'prop-types';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const {
    id, name, description, price, amount, onAdd, onRemove,
  } = props;
  const fixedPrice = `$${price.toFixed(2)}`;

  const onAddHandler = () => {
    onAdd({
      id,
      name,
      description,
      price,
      amount,
    });
  };

  const onRemoveHandler = () => {
    onRemove(id);
  };
  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{fixedPrice}</span>
          <span className={classes.amount}>
            x
            {amount}
          </span>
        </div>
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={onRemoveHandler}>−</button>
        <button type="button" onClick={onAddHandler}>+</button>
      </div>
    </li>
  );
};

CartItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired,
  onAdd: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default CartItem;
