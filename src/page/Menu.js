import React, { useState } from "react";
import Banner from "../asset/BannerAll.jpg";
import "../style/Menu.css";
import { card } from "../card/list";
import MenuCard from "../component/MenuCard";
import "../style/Catbar.css";
import { Link } from "react-router-dom";

import { FaTrash } from "react-icons/fa";
import axios from 'axios'

import allOrders from '../backend/orders.json'

function Menu() {
  const [userName, setUserName] = useState("");
  const [payment, setPayment] = useState("");
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
    total = total.reduce((sum, a) => sum + a, 0);
    setTotalPrice(total);
  };

  const deleteMenuHandler = (delIdx) => {
    let ordersData = [];
    for (let i = 0; i < orders.length; i++) {
      if (i !== delIdx) {
        console.log(i);
        ordersData.push(orders[i]);
      }
    }

    setOrders(ordersData);
    totalPriceHandler(ordersData);
  };

  const submitOrderHandler = async e => {
    const userOrder = {
        userName,
        payment,
        orders
    }

    allOrders.push(userOrder)
    try{
        await axios.post("http://localhost:3030/add_order", {
            allOrders
        })
    } catch (err) {
        console.log(err)
        setTimeout(()=>{}, 300)
    }
    setOrders([])
    setTotalPrice(0)
    setUserName("")
    setPayment("")
  }

  const commafy = (num) => {
    var str = num.toString().split(".");
    if (str[0].length >= 3) {
      str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,");
    }
    if (str[1] && str[1].length >= 3) {
      str[1] = str[1].replace(/(\d{3})/g, "$1 ");
    }
    return str.join(".");
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
      {orders.length > 0 && (
        <div className="pesanan">
          <h1>Pesanan</h1>
          <div className="scroll-pesan">
            {orders.map((items, i) => {
              return (
                <div className="menu-item">
                  <div>
                    {items.quantity} - {items.name}
                  </div>
                  <div>
                    <FaTrash
                      style={{ cursor: "pointer" }}
                      onClick={() => deleteMenuHandler(i)}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="pesanan-total">
            <h3>Subtotal</h3>
            <p>Rp. {commafy(totalPrice)}</p>
          </div>
          <div className="input">
            <input type="text" onChange={e => setUserName(e.target.value)} placeholder="Nama Pembeli" />
          </div>
          <div className="input">
            <input type="text" onChange={e => setPayment(e.target.value)} placeholder="Jenis Pembayaran" />
          </div>
          <div className="pesanan-submit">
            <button onClick={submitOrderHandler}>Pesan</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
