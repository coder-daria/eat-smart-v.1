import Search from './Search';
import {newProduct} from './Actions';
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
      items: state.items
  }
}

const mapDispatchToProps = dispatch => {
  return {
      
  }
}


const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)

export default SearchContainer;