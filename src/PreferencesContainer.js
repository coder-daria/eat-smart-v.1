import { connect } from 'react-redux';
import Preferences from './Preferences';
import {addPreference} from './Actions';

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: mealPreference => dispatch(addPreference(mealPreference))
  }
}

const PreferencesContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(Preferences)

export default PreferencesContainer;