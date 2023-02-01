import { CATEGORIES_ACTION_TYPES } from "./category.types";

const INITITAL_STATE = {
  categories: []
};

export const categoriesReducer = (state = INITITAL_STATE, action) => {
  const {type, payload} = action;

  switch(type){
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return {
        ...state,
        categories: payload
      };
    default:
      return state;
  };
};