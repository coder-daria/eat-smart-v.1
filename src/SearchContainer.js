import Search from './Search';
import {selectFood, addSelectedFood} from './Actions';
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
      items: state.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onSelect: (food) => {
        dispatch(selectFood(food))
        dispatch(addSelectedFood(food))
      }
  }
}


const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

export default SearchContainer;