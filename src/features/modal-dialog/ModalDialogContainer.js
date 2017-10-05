import { connect } from 'react-redux';
import ModalDialog from './ModalDialog';
import { withRouter } from 'react-router-dom';
import { modalClosed } from '../../Actions';

const mapStateToProps = (state, ownProps) => {
  return {
    selectedBeer: state.foodList.beers[ownProps.match.params.beerId],
    similarBeers: state.foodList.similarBeers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClose: () => dispatch(modalClosed())
  };
};

const ModalDialogWithRouter = withRouter(ModalDialog);

const ModalDialogContainer = connect(mapStateToProps, mapDispatchToProps)(
  ModalDialogWithRouter
);

export default ModalDialogContainer;
