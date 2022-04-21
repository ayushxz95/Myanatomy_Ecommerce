import {
    CHANGE_CATEGORY_ITEM,
} from "./types";
  

export const ChangeCategoryItem = (category) => {
    return {
      type: CHANGE_CATEGORY_ITEM,
      payload: category,
    };
  };