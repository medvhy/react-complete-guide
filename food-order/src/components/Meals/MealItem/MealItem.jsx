import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CartContext from '../../../store/cart-context';
import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';

const MealItem = (props) => {
  const cartContext = useContext(CartContext);
  const {
    id, name, description, price,
  } = props;
  const fixedPrice = `$${price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id,
      name,
      description,
      price,
      amount,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{fixedPrice}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

MealItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default MealItem;
