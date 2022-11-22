import "./cart-dropdown.styles.scss";

import React, { useContext, useEffect, useRef } from "react";

import { CartContext } from "../../contexts/cart.context";

import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";
import { BaseButton } from "../button/button.styles";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  // show on hover
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    element.addEventListener("mouseover", (e) => setIsCartOpen(true));
    element.addEventListener("mouseleave", (e) => setIsCartOpen(false));
  }, [setIsCartOpen]);

  const goToCheckoutHandler = () => {
    navigate("./checkout");
  };

  return (
    <div ref={ref} className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem cartItem={item} key={item.id} />)
        ) : (
          <span>Cart still empty 🛒</span>
        )}
        {}
      </div>
      <BaseButton onClick={goToCheckoutHandler}>GO TO CHECKOUT</BaseButton>
    </div>
  );
};

export default CartDropdown;
