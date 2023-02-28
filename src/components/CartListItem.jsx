import React from "react";
import "../styles/cartListItem.css";

const CartListItem = ({ product }) => {
  return (
    <div className="cart-list-item">
      <div className="cart-product-img">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-info">
        <h5>
          {product.title.length > 70
            ? ` [ $${product.price} ] ${product.title.substring(0, 70)}...`
            : `[ $${product.price} ] ${product.title} `}
        </h5>
        <div className="quantity-selection">
          <form>
            <label htmlFor="quantity">
              Quantity
              <select defaultValue={product.quantity}>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
              </select>
            </label>
          </form>
        </div>
      </div>
      <div className="cart-product-buttons">
        <button className="remove-button">Remove</button>
        <button className="move-wishlist-button">+ Wishlist</button>
      </div>
    </div>
  );
};

export default CartListItem;
