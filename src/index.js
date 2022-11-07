import React from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { UserProvider } from "./contexts/user-context.jsx";

import "./index.css";
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <UserProvider>
      <App />
    </UserProvider>
  </BrowserRouter>
  // </React.StrictMode>
);

reportWebVitals();
