import DemoFormArray from './DemoFormArray';
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

const DemoFormArrayContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DemoFormArray)

export default DemoFormArrayContainer;