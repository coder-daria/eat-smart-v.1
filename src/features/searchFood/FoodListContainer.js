import { connect } from 'react-redux';
import FoodList from './FoodList';
import {
  fetchMoreBeersFromAPI,
  fetchSimilarBeersFromAPI
} from '../../redux/asyncActions.js';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => {
  return {
    beers: state.foodList.beers,
    pageNumber: state.foodList.pageNumber,
    serverHasMoreBeers: state.foodList.serverHasMoreBeers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getMoreBeers: pageNumber => dispatch(fetchMoreBeersFromAPI(pageNumber)),
    fetchSimilarBeers: beer => dispatch(fetchSimilarBeersFromAPI(beer))
  };
};
const FoodListWithRouter = withRouter(FoodList);

const FoodListContainer = connect(mapStateToProps, mapDispatchToProps)(
  FoodListWithRouter
);

export default FoodListContainer;
