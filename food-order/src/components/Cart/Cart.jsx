import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import Checkout from './Checkout';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
  const { onHideCart } = props;
  const [orders, setOrders] = useState([]);
  const [isCheckOut, setIsCheckOut] = useState(false);
  const cartContext = useContext(CartContext);

  const cartItemAddHandler = (item) => {
    cartContext.addItem(item);
  };

  const cartItemRemoveHandler = (id) => {
    cartContext.removeItem(id);
  };

  const onOrderHandler = () => {
    setIsCheckOut(true);
  };

  const onSubmitOrderHandler = (orderData) => {
    setOrders((prevOrder) => prevOrder.concat(orderData));
    setIsCheckOut(false);
    cartContext.clearCart();
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
  const pendingOrdersMessage = `You have ${orders.length} pending orders.`;
  const modalActions = isCheckOut
    ? (<Checkout onConfirmOrder={onSubmitOrderHandler} onCancel={onHideCart} />)
    : (
      <div className={classes.actions}>
        <button type="button" className={classes['button--alt']} onClick={onHideCart}>Close</button>
        { hasItems && <button type="button" className={classes.button} onClick={onOrderHandler}>Order</button> }
      </div>
    );

  return (
    <Modal onClickBackdrop={onHideCart}>
      <div>
        <p>
          { pendingOrdersMessage }
        </p>
      </div>
      <ul className={classes['cart-items']}>
        { cartItems }
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{ totalAmount }</span>
      </div>
      { modalActions }
    </Modal>
  );
};

Cart.propTypes = {
  onHideCart: PropTypes.func.isRequired,
};

export default Cart;
