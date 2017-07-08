import { connect } from 'react-redux';
import ListOfFood from './ListOfFood';

const mapStateToProps = state => {
  return {
    list: state.list
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

const ListOfFoodContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ListOfFood)

export default ListOfFoodContainer;