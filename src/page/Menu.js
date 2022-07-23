import React, { useState } from "react";
import Banner from "../asset/BannerAll.jpg";
import "../style/Menu.css";
import { card } from "../card/list";
import MenuCard from "../component/MenuCard";
import "../style/Catbar.css";
import { Link } from "react-router-dom";

function Menu() {
  const [orders, setOrders] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addMenuHandler = (item) => {
    const newItem = {
      ...item,
      quantity: 1,
    };

    let hasItem = false;
    let ordersData = orders.map((items) => {
      if (items.name === newItem.name) {
        hasItem = true;
        return { ...items, quantity: items.quantity + 1 };
      } else {
        return items;
      }
    });

    if (!hasItem) {
      const newOrder = [...orders, newItem];
      setOrders(newOrder);
      totalPriceHandler(newOrder);
    } else {
      setOrders(ordersData);
      totalPriceHandler(ordersData);
    }
  };

  const totalPriceHandler = (orderList) => {
    let total = orderList.map((items) => items.quantity * items.price);
    setTotalPrice(total[0]);
  };

  return (
    <div className="menu">
      <div className="MenuTop">
        <img src={Banner} alt="BannerDrinks"></img>
      </div>
      <div className="CategoryBar">
        <Link to="/menu" className="active">
          All
        </Link>
        <Link to="/signature">Signature Burger</Link>
        <Link to="/burger">Burger</Link>
        <Link to="/chicken">Chicken</Link>
        <Link to="/drinks">Drinks</Link>
      </div>
      <div className="ProductCard">
        {card.map((menuCard, key) => {
          return (
            <MenuCard
              key={key}
              image={menuCard.image}
              name={menuCard.name}
              price={menuCard.price}
              details={menuCard.details}
              linkgfs={menuCard.linkgfs}
              linkgfk={menuCard.linkgfk}
              linksfs={menuCard.linksfs}
              linksfk={menuCard.linksfk}
              addMenu={addMenuHandler}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
