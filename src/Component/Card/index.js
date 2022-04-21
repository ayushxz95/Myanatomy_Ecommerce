import { connect } from "react-redux";
import Card from "./Card";
import {mapDispatchToProps} from "./props";

export default connect(null, mapDispatchToProps)(Card);