import { connect } from "react-redux";
import Alert from "./Alert";
import {mapStateToProps , mapDispatchToProps} from "./props";

export default connect(mapStateToProps, mapDispatchToProps)(Alert);