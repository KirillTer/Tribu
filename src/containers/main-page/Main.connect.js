import {connect} from "react-redux";
import { LOAD_MAIN_START, LOAD_MORE_START } from '../../store/actionTypes'
import { getMainSelector } from '../../store/selectors'
import MainView from "./Main.view";


const mapStateToProps = (state) => {
  return {
    mainData: getMainSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadMain: () => dispatch({
      type: LOAD_MAIN_START
    }),
    loadMore: (page) => dispatch({
      type: LOAD_MORE_START,
      payload: page
    }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
