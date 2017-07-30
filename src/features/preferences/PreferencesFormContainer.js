import { connect } from 'react-redux';
import {addPreference, updatePreference} from '../../Actions';
import PreferencesParent from './PreferencesParent';

const mapStateToProps = state => {
  return {
    mealsPreferences: state.mealsPreferences
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit : mealPreference => dispatch(addPreference(mealPreference))
  }
}

const PreferencesFormContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(PreferencesParent)

export default PreferencesFormContainer;