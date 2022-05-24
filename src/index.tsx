import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter /* HashRouter uncomment when nedd gh-pages deploy && commented BrowserRouter */ } from "react-router-dom";
import App from "./components/App/App";

ReactDOM.render(
  <React.StrictMode>
    {/* <HashRouter> uncomment when nedd gh-pages deploy && commented next line */}
    <BrowserRouter>
        <App />
    {/* </HashRouter> uncomment when nedd gh-pages deploy && commented next line */}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
