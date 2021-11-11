import { useState } from "react";

const initialState = {
  cart: [],
};

const useInitialState = () => {
  const [state, setState] = useState(initialState);
  const addToCart = (payload) => {
    setState({
      ...state /*Mantén el estado,  que por ahora solo tiene cart, pero mas adelante tendrá otros elementos */,
      cart: [
        ...state.cart,
        payload,
      ] /*Manten lo qu ya existe: state.cart, no lo quiero borrar, y agrega lo que te voy a pasar (payload). Payload es una palabra acostumbrada. En este caso se trata de un producto */,
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
  };
};

export default useInitialState;
