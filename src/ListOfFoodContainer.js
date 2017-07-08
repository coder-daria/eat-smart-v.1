import { connect } from 'react-redux';
import ListOfFood from './ListOfFood';
import {removeSelectedFood} from "./Actions";

const mapStateToProps = state => {
  return {
    list: state.list
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onClick: food => dispatch(removeSelectedFood(food))
  }
}

const ListOfFoodContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListOfFood)

export default ListOfFoodContainer;