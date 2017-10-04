import SnackbarMessage from './SnackbarMessage';
import { connect } from 'react-redux';
import { asyncRequestStatus, ASYNC_REQUEST_STATUS_ENUM } from '../Actions';

const mapStateToProps = state => {
  return {
    isOpen:
      state.foods.asyncRequestStatus === ASYNC_REQUEST_STATUS_ENUM.FINISHED ||
      state.showNoMoreBeers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleClose: () =>
      dispatch(asyncRequestStatus(ASYNC_REQUEST_STATUS_ENUM.HIDE_NOTIFICATION))
  };
};

const SnackbarContainer = connect(mapStateToProps, mapDispatchToProps)(
  SnackbarMessage
);

export default SnackbarContainer;
