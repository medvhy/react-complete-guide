import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classes from './Modal.module.css';

const Backdrop = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className={classes.backdrop}
      aria-hidden="true"
    />
  );
};

Backdrop.propTypes = {
  onClick: PropTypes.func.isRequired,
};

const ModalOverlay = (props) => {
  const { children } = props;
  return (
    <div className={classes.modal}>
      <div className={classes.content}>
        { children }
      </div>
    </div>
  );
};

ModalOverlay.propTypes = {
  children: PropTypes.node.isRequired,
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  const { children, onClickBackdrop } = props;

  return (
    <>
      { ReactDOM.createPortal(<Backdrop onClick={onClickBackdrop} />, portalElement) }
      { ReactDOM.createPortal(<ModalOverlay>{ children }</ModalOverlay>, portalElement) }
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onClickBackdrop: PropTypes.func.isRequired,
};

export default Modal;
