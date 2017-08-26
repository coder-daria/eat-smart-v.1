import Loading from './Loading';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    isLoading: state.foods.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const LoadingContainer = connect(mapStateToProps, mapDispatchToProps)(Loading);

export default LoadingContainer;
