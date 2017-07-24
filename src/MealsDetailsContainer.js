import { connect } from 'react-redux';
import MealsDetails from './MealsDetails';
import { showMealDetails } from "./Actions";
import { sumFoods } from "./functions";


const mapStateToProps = state => {
  const selectedMeal = state.selectedMeal || { details: [], mealName: "" };
  const foodsOfMeal = selectedMeal.details.map(id => {
    return state.foods[id]; // array of ingredients' fat, carbs, protein
  });

  let mealDetails = foodsOfMeal.reduce((total, food) => {
    return sumFoods(total, food.properties);
  }, { fat: 0, carbs: 0, protein: 0 }); //sum of carbs, fat and protein

  return {
    theWholeMeal: { mealName: selectedMeal.mealName, mealDetails: mealDetails },
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