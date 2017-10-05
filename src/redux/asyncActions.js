// Beers async actions
import {
  fetchMoreBeersFromServer,
  fetchSimilarBeersFromServer
} from '../server/API.js';
import * as actions from '../Actions';

export const fetchMoreBeersFromAPI = pageNumber => dispatch => {
  fetchMoreBeersFromServer(pageNumber)
    .then(data => {
      if (data.length === 0) {
        dispatch(
          actions.asyncRequestStatus(
            'FINISHED',
            'Sorry, there are no more beers'
          )
        );
        setTimeout(() => {
          dispatch(actions.asyncRequestStatus('HIDE_NOTIFICATION'));
        }, 3000);
      }
      dispatch(actions.newBeers(data));
    })
    .catch(err => console.log(err));
};

export const fetchSimilarBeersFromAPI = beer => dispatch => {
  const queryParameters = {};
  if (beer.abv) {
    queryParameters.abv_gt = Number(beer.abv.toFixed(0));
  }
  if (beer.ibu) {
    queryParameters.ibu_gt = Number(beer.ibu.toFixed(0));
  }
  if (beer.ebc) {
    queryParameters.ebc_gt = Number(beer.ebc.toFixed(0));
  }
  fetchSimilarBeersFromServer(queryParameters).then(data => {
    dispatch(actions.fetchSimilarBeers(data));
  });
};
