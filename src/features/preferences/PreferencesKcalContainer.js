import { connect } from 'react-redux';
import {addKcalPreferences} from '../../Actions';
import PreferencesKcal from './PreferencesKcal';

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addKcal : kcal => dispatch(addKcalPreferences(kcal))
  }
}

const PreferencesKcalContainer = connect(
  mapStateToProps, 
  mapDispatchToProps
)(PreferencesKcal)

export default PreferencesKcalContainer;