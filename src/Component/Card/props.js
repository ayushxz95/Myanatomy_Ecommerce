import { deleteItem } from "../../Redux/Actions/ItemAction";

const mapStateToProps = (state) => {
    return {
        category: state.category.category,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteItem: (id, category) => dispatch(deleteItem(id, category))
    }
}

export {mapStateToProps , mapDispatchToProps}; 