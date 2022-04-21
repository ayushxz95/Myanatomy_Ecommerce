import { addItems, fetchItems, updateItem, fetchCategoryItemsSuccess } from "../../Redux/Actions/ItemAction";

const mapStateToProps = (state) => {
  return {
    category: state.category.category,
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      updateItem: (state, id, type, category) => dispatch(updateItem(state, id, type, category)),
      addItems: (state, type) => dispatch(addItems(state, type)),
      fetchItems: () => dispatch(fetchItems()),
      fetchCategoryItems: (type) => dispatch(fetchCategoryItemsSuccess(type)),
    };
  };

export {mapStateToProps, mapDispatchToProps};