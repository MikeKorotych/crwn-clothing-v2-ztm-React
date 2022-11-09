import React from "react";
import Button from "../button/button.comopnent";

import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
        <Button type="inverted">Add to card</Button>
      </div>
    </div>
  );
};

export default ProductCard;
