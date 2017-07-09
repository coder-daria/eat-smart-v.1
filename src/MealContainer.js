import { connect } from 'react-redux';
import Meal from './Meal';
import {removeSelectedFood} from "./Actions";

const mapStateToProps = state => {
  return {
    list: state.list
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: food => dispatch(removeSelectedFood(food))
  }
}

const MealsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Meal)

export default MealsContainer;