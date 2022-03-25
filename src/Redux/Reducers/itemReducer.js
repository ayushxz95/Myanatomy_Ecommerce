import {
    FETCH_ITEM,
    ADD_ITEM,
    Delete_Item_Success,
    Delete_Item_Error
} from "../Actions/types";

const initialState = {
    vals: [],
    val: {}, 
};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_ITEM: 
          return {
              ...state,
              vals: action.payload
          };
        case ADD_ITEM: 
          return {
              ...state,
              val: action.payload
          };
        case Delete_Item_Success:
            const filteredItems = state.items.filter(item => item.key != action.payload.key)
            return {
                ...state,
                val: filteredItems
            }
        case Delete_Item_Error:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}