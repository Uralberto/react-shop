import React, { useState, useContext } from "react";
import AppContext from "../context/AppContext";
import OrderItem from "@components/OrderItem";
import MyOrder from "../containers/MyOrder";
import useDate from "../hooks/useDate";
import "@styles/Checkout.scss";

const Checkout = () => {
  const { state } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (acumulador, currentValue) =>
      acumulador + currentValue.price;
    const sum = state.cart.reduce(reducer, 0);
    return sum;
  };

  const numArticles = () => {
    const numArticles = state.cart.length;
    return numArticles;
  };

  const fecha = useDate();

  return (
    <div className="Checkout">
      <div className="Checkout-container">
        <h1 className="title">My order</h1>
        <div className="Checkout-content">
          <div className="order">
            <p>
              {fecha}
              <span>{numArticles()} articles</span>
            </p>
            <p>Vr total COP {sumTotal()}</p>
          </div>
        </div>
        {state.cart.map((product) => (
          <OrderItem product={product} key={`orderItemB-${product.id}`} />
        ))}
      </div>
    </div>
  );
};

export default Checkout;
