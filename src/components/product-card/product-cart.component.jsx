import React, { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";
import "./product-card.styles.scss";
import { InvertedButton } from "../button/button.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        <InvertedButton type="inverted" onClick={addProductToCart}>
          Add to card
        </InvertedButton>
      </div>
    </div>
  );
};

export default ProductCard;
