

import * as types from "../store/type";

const defState = {
  items: [],
  loading:true,
};

export const reducer = (state=defState, { type, payload,load }) => {
  console.log("type:", type)
  console.log("payload:", payload)
  console.log("loading:", load)
  switch (type) {
    case types.SET_REPOS:
      return { ...state, items: payload , loading:load};

    default:
      return state;
  }
};