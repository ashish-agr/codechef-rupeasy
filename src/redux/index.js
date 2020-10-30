import { combineReducers } from "redux";
import * as budget from "./budget/index";

const allReducers = {
  ...budget.reducer
};

const actions = {
  ...budget.actions
};

const reducers = combineReducers(allReducers);

export { reducers, actions };
