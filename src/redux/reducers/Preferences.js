import * as actions from '../../Actions';

const initialState = {
    kcal: 0,
    meals: []
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case actions.ADD_PREFERENCE:
            let preference = action.content;
            let mealsPreferences = [...state.meals, preference]
            return Object.assign({}, state, {
                    kcal: state.kcal,
                    meals: mealsPreferences
            });
        case actions.REMOVE_PREFERENCE:
            let preferenceToRemove = action.content; //name
            let newUserPreferences = state.meals.filter(meal => meal.name !== preferenceToRemove);

            return Object.assign({}, state, {
                    kcal: state.kcal,
                    meals: newUserPreferences
            });

        case actions.ADD_KCAL_PREFERENCES:
            let kcalPerDay = Number(action.content)
            return Object.assign({}, state, { kcal: kcalPerDay, meals: [...state.preferences.meals] })
        default:
            return state;
    }
}