import { connect } from 'react-redux';
import mealForm from './mealForm';
import {removeSelectedFood, addFoodsOfNewMealToMeals, addSelectedFood} from "../../Actions";
import {convertObjectToArray} from '../../functions';

const mapStateToProps = state => {
  return {
    foodsBeingAddedToNewMeal: state.foods.foodsBeingAddedToNewMeal,
    foods: state.foods.foods,
    foodsToSearch: convertObjectToArray(state.foods.foods),
    meal: state.preferences.meals,
    initialValues: {meal: state.preferences.meals}
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeFromMeal: foodId => dispatch(removeSelectedFood(foodId)),
    onSelect: (foodId) => {dispatch(addSelectedFood(foodId))},
    addMeal: values => dispatch(addFoodsOfNewMealToMeals(values, values.meal)),
  }
}

const MealParentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(mealForm)

export default MealParentContainer;