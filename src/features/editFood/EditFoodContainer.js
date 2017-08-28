import { connect } from 'react-redux';
import EditFoodForm from './EditFoodForm';
import { editFood } from '../../Actions';
import { convertObjectToArray } from '../../functions.js';
import { formValueSelector } from 'redux-form';

const mapStateToProps = state => {
  const selector = formValueSelector('EditFoodForm');
  return {
    isSelected: selector(state, 'selected'),
    foods: convertObjectToArray(state.foods.foods)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: food => {
      dispatch(editFood(food));
    }
  };
};

const EditFoodContainer = connect(mapStateToProps, mapDispatchToProps)(
  EditFoodForm
);

export default EditFoodContainer;
