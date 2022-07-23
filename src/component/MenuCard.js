import React, { useState } from "react";
import Popup from "../component/Popup";
import PopupOrder from "../component/PopupOrder";

function MenuCard({
  image,
  name,
  price,
  details,
  linkgfs,
  linkgfk,
  linksfs,
  linksfk,
  addMenu,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const [orderOpen, setOrderOpen] = useState(false);

  const toggleOrderPopup = () => {
    setOrderOpen(!orderOpen);
  };

  const menuData = {
    name,
    price,
  };

  return (
    <div className="card">
      <div className="menuCard">
        <div style={{ backgroundImage: `url(${image})` }}></div>
        <h1>{name}</h1>
        <p>Rp. {price}</p>
      </div>
      <div className="btn-detail">
        <button onClick={togglePopup}>Details</button>
        {isOpen && (
          <Popup
            content={
              <>
                <h2>{name}</h2>
                <div style={{ backgroundImage: `url(${image})` }}></div>
                <p>{details}</p>
              </>
            }
            handleClose={togglePopup}
          />
        )}
      </div>
      <div className="btn-order">
        <button onClick={() => addMenu(menuData)}>Order</button>
      </div>
    </div>
  );
}

export default MenuCard;
