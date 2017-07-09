import { connect } from 'react-redux';
import Meal from './Meal';
import {removeSelectedFood, addListToMeals} from "./Actions";

const mapStateToProps = state => {
  return {
    list: state.list
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: food => dispatch(removeSelectedFood(food)),
    add : food => dispatch(addListToMeals(food))
  }
}

const MealsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Meal)

export default MealsContainer;