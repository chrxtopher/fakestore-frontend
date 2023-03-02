import React, { useState, useEffect } from "react";
import "../styles/modal.css";
import MenuButton from "./MenuButton";
import CartListItem from "./CartListItem";
import { motion as m } from "framer-motion";
import { getCartProducts } from "../util/api";

const CartModal = ({ closeHandler, cart }) => {
  const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
  const [cartItems, setCartItems] = useState(null);

  useEffect(() => {
    const getCart = async (productList) => {
      const data = await getCartProducts(productList);
      setCartItems(data);
    };
    getCart(cart);
  }, [cart]);

  const calcCartTotals = (cart) => {
    let productsTotal = 0;
    let taxTotal = 0;
    cart.forEach((item) => {
      let itemTotal = item.price * item.quantity;
      productsTotal += itemTotal;
    });
    taxTotal = productsTotal * 0.09;

    return {
      productsTotal: USDollar.format(productsTotal),
      taxTotal: USDollar.format(taxTotal),
      cartTotal: USDollar.format(productsTotal + taxTotal),
    };
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
          <div className="cart-totals">
            <p>{`Products Total: ${
              calcCartTotals(cartItems).productsTotal
            }`}</p>
            <p>{`Estimated Tax: ${calcCartTotals(cartItems).taxTotal}`}</p>
            <h5>{`Cart Total: ${calcCartTotals(cartItems).cartTotal}`}</h5>
          </div>
        )}
        <button type="button" className="checkout-button">
          Checkout
        </button>
      </div>
    </m.div>
  );
};

export default CartModal;
