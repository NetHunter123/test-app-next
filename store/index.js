import { createStore } from "redux";
import axios from "axios";

const defData = {
  data: [],
};

const reducer = (state = defData, action) => {
  axios
    .get("https://run.mocky.io/v3/62fb6739-d3df-48c7-a91d-7950c8aaee6c")
    .then((response) => {
      state.data = response.data;
      console.log("state:", state)
      return state;
      // setLoading(false);
    })
    .catch((error) => {
      console.error(error);
    });
};

export const store = createStore(reducer);
