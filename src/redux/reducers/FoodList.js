import * as actions from '../../Actions';

const initialState = {
  beers: [],
  pageNumber: 1,
  serverHasMoreBeers: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.NEW_BEERS:
      const serverHasMoreBeers = action.content.length > 0;
      const beers = [...state.beers, ...action.content];
      return Object.assign({}, state, {
        serverHasMoreBeers,
        beers,
        pageNumber: state.pageNumber + 1
      });
    case actions.FETCH_SIMILAR_BEERS:
      return Object.assign({}, state, { similarBeers: action.content });
    case actions.MODAL_CLOSED:
      return Object.assign({}, state, { similarBeers: null });
    default:
      return state;
  }
};

export default reducer;
