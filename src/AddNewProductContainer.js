import AddNewProduct from './AddNewProduct';
import {newFood} from './Actions';
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onSubmit: product => dispatch(newFood(product))
  }
}

const AddNewProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNewProduct)

export default AddNewProductContainer;