import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

function Card(props) {
  const { children, className } = props;
  const cssClasses = `card ${className}`;
  return (
    <div className={cssClasses}>
      { children }
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string.isRequired,
};

export default Card;
