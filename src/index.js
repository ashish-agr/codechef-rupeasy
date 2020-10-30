import React from "react";
import { render } from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "react-redux";
import { store } from "./store";

//CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "./style/genericCss.css";

//FONT AWESOME
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faDollarSign,
  faHome,
  faCar,
  faWalking,
  faUser,
  faChartPie,
  faFileInvoice
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faDollarSign,
  faHome,
  faCar,
  faWalking,
  faUser,
  faChartPie,
  faFileInvoice
);

render(
  <Provider store={store}>
    <BrowserRouter basename="/">
      
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
