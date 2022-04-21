import { addItems, updateItem } from "../../Redux/Actions/ItemAction";

const mapStateToProps = (state) => {
  return {
     category: state.category.category,
}
}
const mapDispatchToProps = (dispatch) => {
    return {
      updateItem: (state, id, type) => dispatch(updateItem(state, id, type)),
      addItems: (state, type) => dispatch(addItems(state, type)),
    };
  };
  
export  {mapStateToProps, mapDispatchToProps}