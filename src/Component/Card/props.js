import { deleteItem } from "../../Redux/Actions/ItemAction";

const mapDispatchToProps = dispatch => {
    return {
        deleteItem: (id) => dispatch(deleteItem(id))
    }
}

export {mapDispatchToProps};