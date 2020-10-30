import * as constants from "./constants";

const addBudget = values => ({ type: constants.addBudget, payload: values });

export default {
  addBudget
};
