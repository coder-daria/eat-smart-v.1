import AddNewProduct from './AddNewProduct';
import {addNewFoodToServer} from '../../Actions';
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onSubmit: product => dispatch(addNewFoodToServer(product))
  }
}

const AddNewProductContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddNewProduct)

export default AddNewProductContainer;