import { connect } from 'react-redux';
import MealsDetails from './MealsDetails';
import { showMealDetails } from "./Actions";
import { sumFoods } from "./functions";


const mapStateToProps = (state) => {
  const selectedMeal = state.selectedMeal || { details: [], name: "" };
  const foodsOfMeal = selectedMeal.details.map(id => {
    return state.foods[id];
  });
  let mealDetails = foodsOfMeal.reduce((total, food) => {
    return sumFoods(total, food.properties);
  }, { fat: 0, carbs: 0, protein: 0 });
  return {
    theWholeMeal: { name: selectedMeal.mealName, mealDetails: mealDetails },
    meals: state.meals
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