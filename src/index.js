import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { GlobalStatePovider } from "./state";
import { SnackbarProvider } from "notistack";
import * as serviceWorker from "./serviceWorker";

import App from "./App";

import "assets/scss/material-kit-react.scss?v=1.8.0";
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.render(
  <SnackbarProvider
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    hideIconVariant={false}
    autoHideDuration={5000}
    maxSnack={3}
  >
    <BrowserRouter>
      <GlobalStatePovider>
        <App />
      </GlobalStatePovider>
    </BrowserRouter>
  </SnackbarProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
