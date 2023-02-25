import React from "react";
import "../styles/cartListItem.css";

const CartListItem = ({ product }) => {
  return (
    <div className="cart-list-item">
      <div className="cart-product-img">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="cart-product-info">
        <h5>
          {product.title.length > 70
            ? ` [ $${product.price} ] ${product.title.substring(0, 70)}...`
            : `[ $${product.price} ] ${product.title} `}
        </h5>
        <p>{product.description}</p>
      </div>
      <div className="cart-product-buttons">
        <button>X</button>
      </div>
    </div>
  );
};

export default CartListItem;
