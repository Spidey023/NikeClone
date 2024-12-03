import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App.jsx";
import store from "./store/store.js";
import { LoginContextProvider } from "./store/context/LoginContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <LoginContextProvider>
        <App />
      </LoginContextProvider>
    </Provider>
  </StrictMode>
);
