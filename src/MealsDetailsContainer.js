import { connect } from 'react-redux';
import MealsDetails from './MealsDetails';
// import {removeSelectedFood} from "./Actions";

const mapStateToProps = state => {
  return {
        food: state.meals[0] //array of food for breakfast
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}

const MealsDetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MealsDetails)

export default MealsDetailsContainer;