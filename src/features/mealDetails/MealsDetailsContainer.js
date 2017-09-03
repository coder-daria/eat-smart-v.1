import { connect } from 'react-redux';
import MealsDetails from './MealsDetails';
import { showMealDetails, toggleStatisticCard } from '../../Actions';
import R from 'ramda';

const mapStateToProps = state => {
  const meals = R.clone(state.meals.meals);
  meals.forEach(meal => {
    meal.foods.forEach(f => Object.assign(f, state.foods.foods[f.id]));
  });

  return {
    meals: meals,
    dailyKcal: state.preferences.kcal,
    details: state.preferences.details
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSelect: meal => {
      dispatch(showMealDetails(meal));
    },
    toggleStatisticCard: statisticCard => {
      dispatch(toggleStatisticCard(statisticCard));
    }
  };
};

const MealsDetailsContainer = connect(mapStateToProps, mapDispatchToProps)(
  MealsDetails
);

export default MealsDetailsContainer;
