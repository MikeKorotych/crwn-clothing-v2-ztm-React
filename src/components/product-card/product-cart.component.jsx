import React, { useContext } from "react";
import Button from "../button/button.comopnent";

import { CartContext } from "../../contexts/cart.context";
import "./product-card.styles.scss";

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
        <Button type="inverted" onClick={addProductToCart}>
          Add to card
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
