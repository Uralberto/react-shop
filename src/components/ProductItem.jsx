import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import "@styles/ProductItem.scss";
import addToCartImage from "@icons/bt_add_to_cart.svg";

const ProductItem = ({ product }) => {
  const { addToCart } = useContext(AppContext);
  /*addToCart viene de AppContext cuyo Provider es initialState. Este a su vez viene del hook useInitialState. ¿Como?
  En App.jsx  está la siguiente linea de código:
  const initialState = useInitialState()

  */
  const handleClick = (item) => {
    addToCart(item);
  };

  return (
    <div className="ProductItem">
      <img src={product.images[0]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={addToCartImage} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
