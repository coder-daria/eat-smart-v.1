import fetchMealsForDate from './fetchMealsForDate';
import DayPicker from './DayPicker';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    date: state.meals.date
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelect: date => dispatch(fetchMealsForDate(date))
  };
};

const DayPickerContainer = connect(mapStateToProps, mapDispatchToProps)(
  DayPicker
);

export default DayPickerContainer;
