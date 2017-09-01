import server from '../../server/serverMock';
import { mealHistoryForDay, selectedDate } from '../../Actions';

const fetchMealsForDate = date => dispatch => {
  dispatch(selectedDate(date));
  server.findMealsIn(date).then(data => dispatch(mealHistoryForDay(data)));
};

export default fetchMealsForDate;
