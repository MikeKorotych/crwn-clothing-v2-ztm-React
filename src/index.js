import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { UserProvider } from "./contexts/user-context.jsx";

import "./index.css";
import { CategoriesProvider } from "./contexts/categories.context.jsx";
import { CartProvider } from "./contexts/cart.context";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <UserProvider>
      <CategoriesProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </CategoriesProvider>
    </UserProvider>
  </BrowserRouter>
  // </React.StrictMode>
);

reportWebVitals();
