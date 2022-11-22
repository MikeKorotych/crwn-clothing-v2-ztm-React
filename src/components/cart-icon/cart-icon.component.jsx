import "./cart-icon.styles.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { useContext, useEffect, useRef } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);
  const { cartCount } = useContext(CartContext);
  // show on click
  // const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  // show on hover
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    element.addEventListener("mouseover", (e) => setIsCartOpen(true));
    element.addEventListener("mouseleave", (e) => setIsCartOpen(false));
  }, [setIsCartOpen]);

  return (
    <div ref={ref} className="cart-icon-container">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
