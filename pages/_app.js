import "../styles/globals.css";
import { Provider } from "react-redux";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
// import {store} from "../store/store";\

const SET_REPOS='SET_REPOS'

const defState = {
  items: [],
};

const reducer = (state=defState, { type, payload }) => {
  switch (type) {
    case SET_REPOS:
      return { ...state, items: payload.items };
    default:
      return state;
  }
};

export const setRepos=(repos)=>({type:SET_REPOS,payload:repos})



function MyApp({ Component, pageProps }) {
  const store = createStore(reducer,applyMiddleware(thunk));

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
