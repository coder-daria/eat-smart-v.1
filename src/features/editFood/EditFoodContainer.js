import EditFoodParent from './EditFoodParent';
import { connect } from 'react-redux';
import {editFood} from '../../Actions';
import {convertObjectToArray} from '../../functions.js';

const mapStateToProps = state => {
  return {
    foods: convertObjectToArray(state.foods.foods)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: food => {dispatch(editFood(food))}
  }
}

const EditFoodContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditFoodParent)

export default EditFoodContainer;