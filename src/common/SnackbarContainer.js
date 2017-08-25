import SnackbarMessage from './SnackbarMessage';
import {connect} from 'react-redux';
import {dataReceived} from '../Actions';

const mapStateToProps = state => {
  return {
    dataReceived: state.foods.dataReceived
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clearStateDataReceived: boolean => dispatch(dataReceived(boolean))
  }
}

const SnackbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SnackbarMessage)

export default SnackbarContainer;