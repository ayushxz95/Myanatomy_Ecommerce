import axios from "axios";
import { FETCH_ITEM, ADD_ITEM, Delete_Item_Error, Delete_Item_Success } from "./types";

export const fetchItems = () => { return (dispatch) => {
                fetch('http://localhost:3004/Items')
                .then(res => res.json())
                .then(items => 
                    dispatch({
                        type: FETCH_ITEM,
                        payload: items
                    })
            );
            };
    
};

export const addItems = userobj => dispatch => {
    fetch('http://localhost:3004/Items', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userobj)
        })
        .then(res => res.json())
        .then(item =>
            dispatch({
                type: ADD_ITEM,
                payload: item
            })
        );
};

export const deleteItemSuccess= (id) => {
    return {
        type: Delete_Item_Success,
        payload: {
            id: id, 
        }
    }
}
export const deleteItemError= (data) => {
    return {
        type: Delete_Item_Error,
        payload: data,
    }
}
export const deleteItem = (id) => {
    return (dispatch) =>  {
        return axios.delete(`http://localhost:3004/Items/${id}`)
        .then(() => {
            dispatch(deleteItemSuccess(id));
        }).catch((error) => {
           const errorPayload = {};
           errorPayload['message'] = error.response.data.message;
           errorPayload['status'] = error.response.status;
           dispatch(deleteItemError(errorPayload));
        })
    }
}

