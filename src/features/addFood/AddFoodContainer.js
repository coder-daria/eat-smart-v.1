import AddFood from './AddFood';
import addNewFoodToServer from './addNewFoodToServer';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { numberBetween } from '../../common/form/validators';

const validate = values => {
  const errors = {};
  const validRangeOfGrams = numberBetween(0, 100);
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length < 2) {
    errors.name = 'Chosen name is too short';
  }
  if (!validRangeOfGrams(values.fat)) {
    errors.fat = 'Wrong value';
  }
  if (!validRangeOfGrams(values.protein)) {
    errors.protein = 'Wrong value';
  }
  if (!validRangeOfGrams(values.carbs)) {
    errors.carbs = 'Wrong value';
  }
  return errors;
};

const mapStateToProps = state => {
  return {
    isLoading: state.foods.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: food => dispatch(addNewFoodToServer(food))
  };
};

const AddFoodForm = reduxForm({
  form: 'addFood',
  validate
})(AddFood);

const AddFoodContainer = connect(mapStateToProps, mapDispatchToProps)(
  AddFoodForm
);

export default AddFoodContainer;
