import { connect } from 'react-redux';
import mealForm from './mealForm';
import {removeSelectedFood, addFoodsOfNewMealToMeals, addSelectedFood} from "../../Actions";
import {convertObjectToArray} from '../../functions';

const mapStateToProps = state => {
  return {
    foodsBeingAddedToNewMeal: state.foods.foodsBeingAddedToNewMeal,
    foods: state.foods.foods,
    foodsToSearch: convertObjectToArray(state.foods.foods),
    mealsPreferences: state.foods.preferences.meals
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeFromMeal: foodId => dispatch(removeSelectedFood(foodId)),
    addMeal : (meal, mealName) => dispatch(addFoodsOfNewMealToMeals(meal, mealName)),
    onSelect: (foodId) => {dispatch(addSelectedFood(foodId))},
    awesomeAddMeal: values => console.log(values),
  }
}

const MealParentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(mealForm)

export default MealParentContainer;