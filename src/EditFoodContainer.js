import EditFoodParent from './EditFoodParent';
import { connect } from 'react-redux';
import {selectFood} from './Actions';
import {convertObjectToArray} from './functions';

const mapStateToProps = state => {
  return {
    foods: convertObjectToArray(state.foods),
    selected : state.selected
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSelect: (food) => {
        dispatch(selectFood(food.properties.id))
    }
  }
}

const EditFoodContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditFoodParent)

export default EditFoodContainer;