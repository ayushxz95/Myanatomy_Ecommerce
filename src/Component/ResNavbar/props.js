import {
    fetchCategoryItemsSuccess,
    fetchItems,
    searchItem,
  } from "../../Redux/Actions/ItemAction";

const mapDispatchToProps = (dispatch) => {
    return {
      fetchCategoryItems: (category) =>
        dispatch(fetchCategoryItemsSuccess(category)),
      fetchItems: () => dispatch(fetchItems()),
      searchItem: (text) => dispatch(searchItem(text)),
    };
  };

  export {mapDispatchToProps}