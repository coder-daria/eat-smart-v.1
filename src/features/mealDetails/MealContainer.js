import { connect } from 'react-redux';
import Meal from './Meal';
import {removeSelectedFood, addFoodsOfNewMealToMeals} from "../../Actions";

const mapStateToProps = state => {
  return {
    foodsOfNewMeal: state.foodsOfNewMeal,
    foods: state.foods,
    predefinedMealsNames: state.predefinedMealsNames
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeFromMeal: foodId => dispatch(removeSelectedFood(foodId)),
    addMeal : (meal, mealName) => dispatch(addFoodsOfNewMealToMeals(meal, mealName)),
  }
}

const MealsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Meal)

export default MealsContainer;