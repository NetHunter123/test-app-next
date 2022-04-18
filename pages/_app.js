import "../styles/globals.css";
import { Provider } from "react-redux";
import {createStore} from "redux";
import axios from "axios";
import {useState} from "react";
import {store} from "../store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
