import * as actions from '../../Actions';

const initialState = {
  location: '/',
  asyncRequestStatus: actions.ASYNC_REQUEST_STATUS_ENUM.HIDE_NOTIFICATION,
  isLoading: false,
  wizardStep: 1
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.ASYNC_REQUEST_STATUS:
      return Object.assign({}, state, { asyncRequestStatus: action.content });
    case actions.IS_LOADING:
      return Object.assign({}, state, { isLoading: action.content });
    case actions.GO_TO:
      return Object.assign({}, state, { location: action.content });
    case actions.CHANGE_WIZARD_PAGE:
      return Object.assign({}, state, {
        wizardStep: state.wizardStep + action.content
      });
    default:
      return state;
  }
}
