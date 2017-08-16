import { connect } from 'react-redux';
import MealParent from './MealParent';
import {removeSelectedFood, addFoodsOfNewMealToMeals, addSelectedFood} from "../../Actions";
import {convertObjectToArray} from '../../functions';



const mapStateToProps = state => {
  return {
    foodsBeingAddedToNewMeal: state.foods.foodsBeingAddedToNewMeal,
    foods: state.foods.foods,
    foodsToSearch: convertObjectToArray(state.foods.foods),
    mealsPreferences: state.foods.mealsPreferences
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeFromMeal: foodId => dispatch(removeSelectedFood(foodId)),
    addMeal : (meal, mealName) => dispatch(addFoodsOfNewMealToMeals(meal, mealName)),
    onSelect: (foodId) => {dispatch(addSelectedFood(foodId))}
  }
}

const MealParentContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MealParent)

export default MealParentContainer;