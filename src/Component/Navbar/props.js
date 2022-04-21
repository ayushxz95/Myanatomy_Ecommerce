import {
    fetchCategoryItemsSuccess,
    fetchItems,
    searchItem
} from "../../Redux/Actions/ItemAction";
import {
  ChangeCategoryItem
} from "../../Redux/Actions/categoryAction";


const mapStateToProps = (state) => {
  return {
     category: state.category.category,
}
}

const mapDispatchToProps = (dispatch) => {
    return {
      fetchCategoryItems: (category) =>
        dispatch(fetchCategoryItemsSuccess(category)),
      fetchItems: () => dispatch(fetchItems()),
      searchItem: (text, category) => dispatch(searchItem(text, category)),
      changeCategory: (category) => dispatch(ChangeCategoryItem(category)),
    };
  };

  export {mapStateToProps, mapDispatchToProps};