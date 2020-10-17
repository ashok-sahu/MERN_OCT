import { bindActionCreators } from "redux";
import * as application from "../pages/Landing/Landing.action";

export default function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      ...application,
    },
    dispatch
  );
}
