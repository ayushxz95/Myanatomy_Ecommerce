import { fetchItems } from '../../Redux/Actions/ItemAction';


const mapStateToProps = state => {
    // return {
    //     items: state.items.categoryVals,
    //     newItem: state.items.val,
    //     category: state.category.category,
    // }
    return {
        allItems: state.items.allItems,
        category: state.category.category,
        categoryItems: state.items.categoryItems,
        searchedItems: state.items.searchedItems,
    }
};
const mapDispatchToProps = dispatch => {
    return {
    fetchItems: () => dispatch(fetchItems())
}};

export {mapStateToProps, mapDispatchToProps};