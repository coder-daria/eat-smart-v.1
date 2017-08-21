import { connect } from 'react-redux';
import MealsDetails from './MealsDetails';
import { showMealDetails } from "../../Actions";
import { sumFoods } from "../../functions";
import R from 'ramda';


const mapStateToProps = state => {
  const selectedMeal = state.foods.selectedMeal || { details: [], mealName: "" };
  const foodsOfMeal = selectedMeal.details.map(object => {
    return state.foods.foods[object.id];

  });

  const copyOfFoodsOfMeal = R.clone(foodsOfMeal);
  copyOfFoodsOfMeal.map(object => {
    for (let key in selectedMeal.details) {
      if (selectedMeal.details[key].id === object.id) {
        object.carbs = ((object.carbs * selectedMeal.details[key].quantity) / 100).toFixed(2);
        object.protein = ((object.protein * selectedMeal.details[key].quantity) / 100).toFixed(2)
        object.fat = ((object.fat * selectedMeal.details[key].quantity) / 100).toFixed(2)
      }
    }
  })



  let mealDetails = copyOfFoodsOfMeal.reduce((total, food) => {
    return sumFoods(total, food);
  }, { fat: 0, carbs: 0, protein: 0 });

  return {
    theWholeMeal: { mealName: selectedMeal.mealName, mealDetails: mealDetails },
    meals: state.foods.meals
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