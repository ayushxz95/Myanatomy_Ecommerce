import { CHANGE_CATEGORY_ITEM } from "../Actions/types";

const initialState = {
    category: "Home",
};


  export default function (state = initialState, action) {
    switch (action.type) {
      case CHANGE_CATEGORY_ITEM:
         return {
             ...state,
             category: action.payload,
         }
       default:
           return {...state}
    }
  }