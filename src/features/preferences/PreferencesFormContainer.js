import { connect } from 'react-redux';
import { savePreferences } from '../../Actions';
import { reduxForm } from 'redux-form';
import PreferencesParent from './PreferencesForm';

const mapStateToProps = state => {
  return {
    initialValues: {
      kcal: state.preferences.kcal,
      meals: state.preferences.meals,
      details: state.preferences.details
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: preferences => dispatch(savePreferences(preferences))
  };
};

const PreferencesParentForm = reduxForm({
  form: 'preferences',
  enableReinitialize: true
})(PreferencesParent);

const PreferencesParentContainer = connect(mapStateToProps, mapDispatchToProps)(
  PreferencesParentForm
);

export default PreferencesParentContainer;
