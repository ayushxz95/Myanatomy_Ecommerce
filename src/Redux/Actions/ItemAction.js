import {url} from "../../frontendConfigFile.js";
import axios from "axios";
import {
  FETCH_ITEM,
  ADD_ITEM,
  FETCH_CATEGORY_ITEM_SUCCESS,
  SEARCH_ITEM,
  UPDATE_ITEM_SUCCESS,
  RESET_CATEGORY_ITEMS,
} from "./types";

export const fetchItems = () => {
  return (dispatch) => {
    fetch(url.CRUD_URL.frontend)
      .then((res) => res.json())
      .then((items) =>
        dispatch({
          type: FETCH_ITEM,
          payload: items,
        })
      );
  };
};

export const fetchCategoryItemsSuccess = (category) => {
  return {
    type: FETCH_CATEGORY_ITEM_SUCCESS,
    payload: category,
  };
};

export const addItems = (userobj, category) => (dispatch) => {
  console.log(category);
  axios.post("http://localhost:3004/Items", userobj).then((item) => {
    dispatch({
      type: ADD_ITEM,
      payload: {
        data: item.data,
        category: category,
      },
    })
    dispatch({
      type: RESET_CATEGORY_ITEMS,
    })
    dispatch({
      type: FETCH_CATEGORY_ITEM_SUCCESS,
      payload: category
    })
  });
};

export const deleteItem = (id) => (dispatch) => {
  axios
    .delete(`http://localhost:3004/Items/${id}`)
    .then(() => {
       window.location.reload(false);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const updateItem = (itemData, id, type, category) => {
  return (dispatch) => {
    return axios
      .put(`http://localhost:3004/Items/${id}`, itemData)
      .then((item) => {
        dispatch({
          type: UPDATE_ITEM_SUCCESS,
          payload: {
            newItem : item.data,
            newId : id,
            type: type,
          }
        })
        if(category !== "Home") {
          dispatch({
            type: RESET_CATEGORY_ITEMS,
          })
          dispatch({
            type: FETCH_CATEGORY_ITEM_SUCCESS,
            payload: category
          })
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

export const searchItem = (text, category) => (dispatch) => {
  dispatch({
    type: SEARCH_ITEM,
    payload: {
      text: text,
      category: category
    },
  });
};
