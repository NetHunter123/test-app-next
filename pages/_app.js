import "../styles/globals.css";
import { Provider } from "react-redux";
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
// import {store} from "../store/store";\

const SET_REPOS='SET_REPOS'

const defState = {
  items: [],
};

export const setRepos=(repos)=>({type:SET_REPOS,payload:repos})

const reducer = (state=defState, { type, payload }) => {
  console.log("type:", type)
  console.log("payload:", payload)
  switch (type) {
    case SET_REPOS:
      return { ...state, items: payload};

    default:
      return state;
  }
};




function MyApp({ Component, pageProps }) {
  const store = createStore(reducer,applyMiddleware(thunk));

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
