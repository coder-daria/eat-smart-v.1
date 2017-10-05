import { connect } from 'react-redux';
import Wizard from './Wizard';
import * as actions from '../../Actions';

const mapStateToProps = state => {
  return {
    wizardStep: state.pagechanges.wizardStep
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changePage: number => dispatch(actions.chageWizardPage(number))
  };
};

const WizardContainer = connect(mapStateToProps, mapDispatchToProps)(Wizard);

export default WizardContainer;
