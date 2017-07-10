import { connect } from 'react-redux';
import MealsDetails from './MealsDetails';
import {showMealDetails} from "./Actions";


const mapStateToProps = (state) => {
  return {
    meals: state.meals,
    selectedMeal: state.selectedMeal
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSelect: (meal) => {
      dispatch(showMealDetails(meal))
    }
  }
}

const MealsDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MealsDetails)

export default MealsDetailsContainer;