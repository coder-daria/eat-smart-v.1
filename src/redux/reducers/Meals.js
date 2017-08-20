import * as actions from '../../Actions';

const initialState = {
  date: new Date()
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.SELECTED_DATE:
            return Object.assign({}, state, { date: new Date() });
      
        default:
            return state;
    }
}