import FoodDetails from './FoodDetails';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  let foodId = state.selected;
  return {
    food: state.foods[foodId].name,
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

//It sends objects to AddNewProducts so they can be used as properties
const FoodDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FoodDetails)

export default FoodDetailsContainer;