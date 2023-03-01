import React, { useState, useEffect } from "react";
import "../styles/modal.css";
import MenuButton from "./MenuButton";
import CartListItem from "./CartListItem";
import { motion as m } from "framer-motion";
import { getCartProducts } from "../util/api";

const CartModal = ({ closeHandler, cart }) => {
  const [cartItems, setCartItems] = useState(null);

  useEffect(() => {
    const getCart = async (productList) => {
      const data = await getCartProducts(productList);
      setCartItems(data);
    };
    getCart(cart);
  }, [cart]);

  const calcCartTotal = (cart) => {
    let cartTotal = 0;
    cart.forEach((item) => {
      let itemTotal = item.price * item.quantity;
      cartTotal += itemTotal;
    });

    return cartTotal;
  };

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
          {cartItems && cartItems.length > 0 && (
            <ul>
              {cartItems.map((item) => {
                return (
                  <li>
                    <CartListItem product={item} />
                  </li>
                );
              })}
            </ul>
          )}
          {!cartItems && <p>Getting your cart ready...</p>}
        </div>
        {cartItems && cartItems.length > 0 && (
          <h4>{`Cart Total: $${calcCartTotal(cartItems)}`}</h4>
        )}
        <button type="button" className="checkout-button">
          Checkout
        </button>
      </div>
    </m.div>
  );
};

export default CartModal;
