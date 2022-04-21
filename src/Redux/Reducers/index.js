import {combineReducers} from 'redux';
import itemReducer from './itemReducer';
import categoryReducer from './categoryReducer';

export default combineReducers({
     items: itemReducer,
     category: categoryReducer
});

