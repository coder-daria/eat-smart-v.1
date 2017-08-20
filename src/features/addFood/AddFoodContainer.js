import AddFood from './AddFood';
import addNewFoodToServer from './addNewFoodToServer';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    isLoading: state.foods.isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onSubmit: food => dispatch(addNewFoodToServer(food))
  }
}

const AddFoodContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddFood)

export default AddFoodContainer;