import AddNewProduct from './AddNewProduct';
import {newProduct} from './Actions';
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onSubmit: product => dispatch(newProduct(product))
  }
}

//It sends objects to AddNewProducts so they can be used as properties
const AddNewProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNewProduct)

export default AddNewProductContainer;