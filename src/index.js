import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { LoginProvider } from "./Context/LoginData";
import { CookiesProvider } from "react-cookie";
import App from "./App";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <CookiesProvider>
          <LoginProvider>
            <App />
          </LoginProvider>
        </CookiesProvider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
