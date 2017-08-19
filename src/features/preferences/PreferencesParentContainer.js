import { connect } from 'react-redux';
import {addPreference, removePreference, savePreferences} from '../../Actions';
import { reduxForm } from 'redux-form';
import PreferencesParent from './PreferencesParent';

const mapStateToProps = state => {
  return {
    mealsPreferences: state.preferences.meals,
    initialValues: {kcal: state.preferences.kcal}
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: preferences => dispatch(savePreferences(preferences)),
    handleSubmit1 : mealPreference => dispatch(addPreference(mealPreference)),
    removePreference : name => dispatch(removePreference(name))
  }
}

// const PreferencesParentForm = reduxForm({
//     form: 'preferences'
// })(PreferencesParent)


const PreferencesParentForm =  reduxForm({
  form: 'preferences'
})(PreferencesParent)

const PreferencesParentContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(PreferencesParentForm)

export default PreferencesParentContainer;