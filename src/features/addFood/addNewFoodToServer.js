import {isLoading, newFood} from '../../Actions';
import { convertFoodFromServer } from '../../functions';
import server from '../../server/serverMock';

const addNewFoodToServer = food => dispatch => {
    dispatch(isLoading(true));
    server.addFood(food)
        .then(data => {
            console.log(`the server says ${data}`);
            const newFoodFromServer = convertFoodFromServer(data);

            dispatch(newFood(newFoodFromServer));
            dispatch(isLoading(false));
        });
}

export default addNewFoodToServer;