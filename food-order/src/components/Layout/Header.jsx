import React from 'react';
import PropTypes from 'prop-types';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';

const Header = (props) => {
  const { onShowCart } = props;

  return (
    <>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of meals" />
      </div>
    </>
  );
};

Header.propTypes = {
  onShowCart: PropTypes.func.isRequired,
};

export default Header;
