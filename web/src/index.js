import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
//all styles
import 'font-awesome/css/font-awesome.min.css';
import 'simple-line-icons/css/simple-line-icons.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import "react-toastify/dist/ReactToastify.css";
import "./styles/style.scss";
//all configs
import App from "./Routes";
import store from "./config/store";
import ScrollToTop from "./utils/scrollToTop";
// import setToken from './utils/token'

// Authentication
// const token = localStorage.getItem('token');
// if (token) {
//   // authenticate api authorization
//   setToken(token);
//   // authenticate routes
//   store.dispatch({ type: SET_AUTH });
// }

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </Router>
  </Provider>,
  document.getElementById("root")
);
