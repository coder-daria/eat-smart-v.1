import Search from './Search';
import {addSelectedFood} from '../../Actions';
import {convertObjectToArray} from '../../functions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
      foods: convertObjectToArray(state.foods)
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onSelect: (foodId) => {
        dispatch(addSelectedFood(foodId))
      }
  }
}


const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

export default SearchContainer;