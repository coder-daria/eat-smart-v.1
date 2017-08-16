import { connect } from 'react-redux';
import {addPreference} from '../../Actions';
import PreferencesParent from './PreferencesParent';

const mapStateToProps = state => {
  return {
    mealsPreferences: state.foods.preferences.meals
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSubmit : mealPreference => dispatch(addPreference(mealPreference))
  }
}

const PreferencesParentContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(PreferencesParent)

export default PreferencesParentContainer;