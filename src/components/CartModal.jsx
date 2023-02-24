import React from "react";
import "../styles/modal.css";
import MenuButton from "./MenuButton";
import { motion as m } from "framer-motion";

const CartModal = ({ closeHandler, cart }) => {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="modal"
    >
      <div className="cart">
        <MenuButton title="Close" clickHandler={closeHandler} />
        <div className="cart-items">
          <ul>
            {cart.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
        </div>
        <button type="button" className="checkout-button">
          Checkout
        </button>
      </div>
    </m.div>
  );
};

export default CartModal;
