import App from './App';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    isLoading: state.foods.isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer;