import SnackbarMessage from './SnackbarMessage';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    dataReceived: state.foods.dataReceived
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

const SnackbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SnackbarMessage)

export default SnackbarContainer;