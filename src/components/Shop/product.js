import { useState } from "react";

const Product = ({ shoeData, updateCartItems }) => {
  const [cartCount, setCartCount] = useState(0);
  const [hidden, setHidden] = useState("hidden");

  const incrementCartCount = () => {
    setHidden("");
    setCartCount(cartCount + 1);
    // updateCartItems("increment");
  };

  const decrementCartCount = () => {
    if (cartCount === 0) {
      return;
    } else if (cartCount === 1) {
      setHidden("hidden");
    }
    // updateCartItems("decrement");
    setCartCount(cartCount - 1);
  };

  return (
    <div className="product-container">
      <img
        className="product-image"
        src={shoeData.assets[0].base_url}
        alt={shoeData.name}
      />
      <p className="product-text">
        {shoeData.name}
        <span>R{shoeData.price}</span>
      </p>
      <div className="product-cart-container">
        <button className="add-to-cart" onClick={incrementCartCount}>
          +
        </button>
        <p className={`cart-count ${hidden}`}>{cartCount}</p>
        <button
          className={`remove-from-cart ${hidden}`}
          onClick={decrementCartCount}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Product;
