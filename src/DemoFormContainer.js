import DemoForm from './DemoForm';
import { connect } from 'react-redux'

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return {
      onSubmit: values => {console.log(values)}
  }
}

const DemoFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DemoForm)

export default DemoFormContainer;