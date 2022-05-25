import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter /* HashRouter uncomment when nedd gh-pages deploy && commented BrowserRouter */ } from "react-router-dom";
import { store } from "./redux/store";
import App from "./components/App/App";

ReactDOM.render(
  <React.StrictMode>
    {/* <HashRouter> uncomment when nedd gh-pages deploy && commented next line */}
    <BrowserRouter>
      <Provider store={store}>
        <App />
    {/* </HashRouter> uncomment when nedd gh-pages deploy && commented next line */}
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
