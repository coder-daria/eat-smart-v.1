import { connect } from 'react-redux';
import Meal from './Meal';
import {removeSelectedFood, addListToMeals} from "./Actions";

const mapStateToProps = state => {
  return {
    list: state.list,
    predefinedMealsNames: state.predefinedMealsNames
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: food => dispatch(removeSelectedFood(food)),
    addMeal : (meal, mealName) => dispatch(addListToMeals(meal, mealName)),

  }
}

const MealsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Meal)

export default MealsContainer;