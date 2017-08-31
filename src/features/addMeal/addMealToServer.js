import { isLoading, mealHistoryForDay } from '../../Actions';
import server from '../../server/serverMock';

const addMealToServer = (meals, date) => dispatch => {
  dispatch(isLoading(true));
  server.addMeals(meals, date).then(data => {
    // console.log("the server says");
    // console.dir(data);
    dispatch(mealHistoryForDay(data));
    dispatch(isLoading(false));
  });
};

export default addMealToServer;
