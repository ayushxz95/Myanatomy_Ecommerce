import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./props";
import Navbar from "./Navbar";

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);