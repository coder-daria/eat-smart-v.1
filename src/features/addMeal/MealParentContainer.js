import { connect } from 'react-redux';
import mealForm from './mealForm';
import addMealToServer from './addMealToServer';
import { convertObjectToArray } from '../../functions';
import { reduxForm } from 'redux-form';

const validate = values => {
  const errors = { meal: '', foods: [] };
  if (!values.meal) {
    errors.meal = 'Required';
  }
  if (!values.foods || !values.foods.length) {
    errors.foods = { _error: 'Select at least one food' };
  } else {
    const foodsArrayErrors = [];

    values.foods.forEach((food, index) => {
      const foodErrors = {};
      if (!food || !food.quantity || isNaN(food.quantity)) {
        foodErrors.quantity = 'Required';
        foodsArrayErrors[index] = foodErrors;
      }
    });
    if (foodsArrayErrors.length) {
      errors.foods = foodsArrayErrors;
    }
  }
  return errors;
};

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
    addMeal: (meal, date) => dispatch(addMealToServer(meal, date))
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
