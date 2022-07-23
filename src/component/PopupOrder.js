import React from 'react';
import '../style/PopupOrder.css';

const PopupOrder = props => {
  return (
    <div className="order-popup-box">
      <div className="order-box">
        <span className="close-icon" onClick={props.handleClose}>X</span>
        {props.content}
      </div>
    </div>
  );
};

export default PopupOrder