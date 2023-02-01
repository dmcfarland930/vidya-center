import { CATEGORIES_ACTION_TYPES } from "./category.types";

const INITITAL_STATE = {
  categoriesMap: {}
};

export const categoriesReducer = (state = INITITAL_STATE, action) => {
  const {type, payload} = action;

  switch(type){
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
      return {
        ...state,
        categoriesMap: payload
      };
    default:
      return state;
  };
};