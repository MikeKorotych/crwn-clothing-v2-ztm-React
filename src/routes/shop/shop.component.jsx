import React from "react";
import { useContext } from "react";

import { CategoriesContext } from "../../contexts/categories.context.jsx";
import ProductCard from "../../components/product-card/product-cart.component.jsx";
import "./shop.styles.scss";

const Shop = () => {
  const {} = useContext(CategoriesContext);

  return (
    <div className="products-container">
      {/* {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))} */}
    </div>
  );
};

export default Shop;
