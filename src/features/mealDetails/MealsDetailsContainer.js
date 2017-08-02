import { connect } from 'react-redux';
import MealsDetails from './MealsDetails';
import { showMealDetails } from "../../Actions";
import { sumFoods } from "../../functions";
import R from 'ramda';


const mapStateToProps = state => {
  const selectedMeal = state.selectedMeal || { details: [], mealName: "" };
  const foodsOfMeal = selectedMeal.details.map(object => {
    return state.foods[object.id];

  });

  const copyOfFoodsOfMeal = R.clone(foodsOfMeal);
  copyOfFoodsOfMeal.map(object => {
    for (let key in selectedMeal.details) {
      if (selectedMeal.details[key].id === object.properties.id) {
        object.properties.carbs = ((object.properties.carbs * selectedMeal.details[key].quantity) / 100).toFixed(2);
        object.properties.protein = ((object.properties.protein * selectedMeal.details[key].quantity) / 100).toFixed(2)
        object.properties.fat = ((object.properties.fat * selectedMeal.details[key].quantity) / 100).toFixed(2)
      }
    }
  })



  let mealDetails = copyOfFoodsOfMeal.reduce((total, food) => {
    return sumFoods(total, food.properties);
  }, { fat: 0, carbs: 0, protein: 0 });

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