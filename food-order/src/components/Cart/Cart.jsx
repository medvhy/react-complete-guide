import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
  const { onHideCart } = props;
  const cartContext = useContext(CartContext);

  const cartItemAddHandler = (item) => {
    cartContext.addItem(item);
  };

  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };

  const cartItems = cartContext
    .items
    .map((item) => (
      <CartItem
        key={item.id}
        id={item.id}
        name={item.name}
        description={item.description}
        price={item.price}
        amount={item.amount}
        onAdd={cartItemAddHandler}
        onRemove={cartItemRemoveHandler}
      />
    ));
  const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = cartContext.items.length > 0;

  return (
    <Modal onClickBackdrop={onHideCart}>
      <ul className={classes['cart-items']}>
        { cartItems }
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{ totalAmount }</span>
      </div>
      <div className={classes.actions}>
        <button type="button" className={classes['button--alt']} onClick={onHideCart}>Close</button>
        { hasItems && <button type="button" className={classes.button}>Order</button> }
      </div>
    </Modal>
  );
};

Cart.propTypes = {
  onHideCart: PropTypes.func.isRequired,
};

export default Cart;
