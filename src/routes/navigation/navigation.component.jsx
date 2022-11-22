import React, { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { signOutUser } from "../../utils/firebase/firebase.utils.js";

import CartIcon from "../../components/cart-icon/cart-icon.component.jsx";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import {
  NavigationContainer,
  LogoContainer,
  NavLinksContainer,
  NavLink,
} from "./navigation.styles.jsx";

import { UserContext } from "../../contexts/user-context.jsx";
import { CartContext } from "../../contexts/cart.context.jsx";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component.jsx";
const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinksContainer>
          <NavLink to="/shop">Shop</NavLink>
          {currentUser ? (
            <NavLink onClick={signOutUser}>Sign out</NavLink>
          ) : (
            <NavLink to="/sign-in">Sign in</NavLink>
          )}
          <CartIcon />
        </NavLinksContainer>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
