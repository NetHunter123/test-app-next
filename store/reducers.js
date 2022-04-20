

import * as types from "../store/type";

const defState = {
  items: [],
};

export const reducer = (state=defState, { type, payload }) => {
  console.log("type:", type)
  console.log("payload:", payload)
  switch (type) {
    case types.SET_REPOS:
      return { ...state, items: payload};

    default:
      return state;
  }
};