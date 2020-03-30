import {connect} from "react-redux";
import { LOAD_DETAIL_START } from '../../store/actionTypes'
import { getDetailSelector } from '../../store/selectors'
import ItemDescriptionView from './ItemDescription.view';


const mapStateToProps = (state) => {
  return {
    detailData: getDetailSelector(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadDetail: (id) => dispatch({
      type: LOAD_DETAIL_START,
      payload: id
    }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemDescriptionView);
