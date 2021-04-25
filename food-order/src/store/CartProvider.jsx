import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import CartContext from './cart-context';

const actions = {
  ADD: 'ADD_CART_ITEM',
  REMOVE: 'REMOVE_CART_ITEM',
};

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === actions.ADD) {
    const totalAmount = state.totalAmount + action.item.price;
    const index = state.items.findIndex((item) => item.id === action.item.id);
    if (index === -1) {
      return {
        ...state,
        items: [...state.items, { ...action.item }],
        totalAmount,
      };
    }
    const items = state.items.map((item) => {
      if (item.id !== action.item.id) {
        return item;
      }
      return {
        ...item,
        amount: item.amount + 1,
      };
    });
    return {
      ...state,
      items,
      totalAmount,
    };
  }
  if (action.type === actions.REMOVE) {
    const itemIndex = state.items.findIndex((item) => item.id === action.id);
    if (itemIndex === -1) {
      return state;
    }
    const existingItem = state.items[itemIndex];
    const totalAmount = state.totalAmount - existingItem.price;
    if (existingItem.amount === 1) {
      const items = state.items.filter((item) => item.id !== action.id);
      return {
        items,
        totalAmount,
      };
    }
    const items = state.items.map((item) => {
      if (item.id !== action.id) {
        return item;
      }
      return {
        ...item,
        amount: item.amount - 1,
      };
    });
    return { ...state, items, totalAmount };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const { children } = props;
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: actions.ADD, item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: actions.REMOVE, id });
  };

  const cardContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cardContext}>
      {children}
    </CartContext.Provider>
  );
};

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
