import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./props";
import FormDialog from "./FormDialog";

export default connect(mapStateToProps, mapDispatchToProps)(FormDialog);