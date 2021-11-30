import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../context/AppContext";
import OrderItem from "@components/OrderItem";
import "@styles/MyOrder.scss";
import arrow from "@icons/flechita.svg";
import ProductList from "./ProductList";
import Checkout from "../pages/Checkout";

const MyOrder = () => {
  const { state } = useContext(AppContext);
  /* De esta manera tenemos el estado dentro de MyOrder*/

  const sumTotal = () => {
    const reducer = (acumulador, currentValue) =>
      acumulador + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={arrow} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {state.cart.map((product) => (
          <OrderItem product={product} key={`orderItemA-${product.id}`} />
        ))}

        <div className="order">
          <p>
            <span>Total</span>
          </p>

          {}

          <p>${sumTotal()}</p>
        </div>
        <button className="primary-button">
          <Link to="/checkout"> CheckOut</Link>
        </button>
      </div>

      {/* {toggleMyOrder && <MyOrder />} */}
    </aside>
  );
};

export default MyOrder;
