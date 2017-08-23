import { connect } from 'react-redux';
import MealForm from './MealForm';
import addMealToServer from "./addMealToServer";
import {convertObjectToArray} from '../../functions';

const mapStateToProps = state => {
  return {
    foods: state.foods.foods,
    foodsToSearch: convertObjectToArray(state.foods.foods),
    mealsPreferences: state.preferences.meals,
    meals: state.meals.meals,
    date: state.meals.date
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addMeal: (meal, date) => dispatch(addMealToServer(meal, date)),
  }
}

const MealParentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MealForm)

export default MealParentContainer;