import { connect } from 'react-redux';
import mealForm from './mealForm';
import addMealToServer from './addMealToServer';
import { convertObjectToArray } from '../../functions';
import { reduxForm } from 'redux-form';
import { selectedMeal } from '../../Actions';

const mapStateToProps = state => {
  return {
    foods: convertObjectToArray(state.foods.foods),
    meals: state.meals.meals,
    date: state.meals.date,
    initialValues: {
      meals: state.meals.meals
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addMeal: (meal, date) => dispatch(addMealToServer(meal, date)),
    onSelect: selectedMealIndex => dispatch(selectedMeal(selectedMealIndex))
  };
};

const MealFormParent = reduxForm({
  form: 'addMeal',
  enableReinitialize: true
})(mealForm);

const MealParentContainer = connect(mapStateToProps, mapDispatchToProps)(
  MealFormParent
);

export default MealParentContainer;
