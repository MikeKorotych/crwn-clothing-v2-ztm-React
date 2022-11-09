import "./cart-dropdown.styles.scss";

import React, { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

import Button from "../button/button.comopnent";
import CartItem from "../cart-item/cart-item.component";
import { Link } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
      </div>
      <Link to="checkout">
        <Button>GO TO CHECKOUT</Button>
      </Link>
    </div>
  );
};

export default CartDropdown;
