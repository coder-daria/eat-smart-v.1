import { isLoading, mealHistoryForDay } from '../../Actions';
import server from '../../server/serverMock';

const addMealToServer = (meals, date) => dispatch => {
  dispatch(isLoading(true));
  server.addMeals(meals, date).then(data => {
    dispatch(mealHistoryForDay(data));
    dispatch(isLoading(false));
  });
};

export default addMealToServer;
