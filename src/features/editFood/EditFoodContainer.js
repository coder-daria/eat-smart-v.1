import EditFoodParent from './EditFoodParent';
import { connect } from 'react-redux';
import {selectFood, editFood} from '../../Actions';
import {convertObjectToArray} from '../../functions.js';

const mapStateToProps = state => {
  return {
    foods: convertObjectToArray(state.foods)
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