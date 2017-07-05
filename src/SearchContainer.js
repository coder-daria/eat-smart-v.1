import Search from './Search';
import {newProduct, selectFood} from './Actions';
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
      items: state.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onSelect: food => dispatch(selectFood(food))
  }
}


const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

export default SearchContainer;