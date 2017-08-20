import server from '../../server/serverMock';
import {mealHistoryForDay, selectedDate} from '../../Actions';


const fetchMealsForDate = momentDate => dispatch => {
    const dateForServer = {year: momentDate.year(), day: momentDate.date(), month: momentDate.month()}
    dispatch(selectedDate(momentDate.toDate()));
    server.findMealsIn(dateForServer)
        .then(data =>dispatch(mealHistoryForDay(data)));
}

export default fetchMealsForDate;