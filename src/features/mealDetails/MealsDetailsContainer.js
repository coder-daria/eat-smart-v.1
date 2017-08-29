import { connect } from 'react-redux';
import MealsDetails from './MealsDetails';
import { showMealDetails } from '../../Actions';
import R from 'ramda';

const mapStateToProps = state => {
  const meals = R.clone(state.meals.meals);
  meals.forEach(meal => {
    meal.foods.forEach(f => Object.assign(f, state.foods.foods[f.id]));
  });

  return {
    meals: meals,
    dailyKcal: state.preferences.kcal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelect: meal => {
      dispatch(showMealDetails(meal));
    }
  };
};

const MealsDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(
  MealsDetails
);

export default MealsDetailsContainer;
