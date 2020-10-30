import { addBudget } from "./constants";

import { values } from "../../views/formData/values";

const defaultState = values;

const budgetReducer = (state = defaultState, action) => {
  switch (action.type) {
    case addBudget:
      return { ...state, ...action.payload.values };
    default:
      return state;
  }
};

export default {
  budgetReducer
};
