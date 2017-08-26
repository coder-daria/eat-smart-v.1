import { connect } from 'react-redux';
import EditFoodChanges from './EditFoodChanges';
import { editFood } from '../../Actions';
import { convertObjectToArray } from '../../functions.js';
import { formValueSelector } from 'redux-form';

const mapStateToProps = state => {
  const selector = formValueSelector('EditFoodChanges');
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
  EditFoodChanges
);

export default EditFoodContainer;
