import {
  asyncRequestStatus,
  newFood,
  ASYNC_REQUEST_STATUS_ENUM
} from '../../Actions';
import { convertFoodFromServer } from '../../functions';
import server from '../../server/serverMock';

const addNewFoodToServer = food => dispatch => {
  dispatch(asyncRequestStatus(ASYNC_REQUEST_STATUS_ENUM.STARTED));
  server.addFood(food).then(data => {
    console.log(`the server says ${data}`);
    const newFoodFromServer = convertFoodFromServer(data);

    dispatch(newFood(newFoodFromServer));
    dispatch(asyncRequestStatus(ASYNC_REQUEST_STATUS_ENUM.FINISHED));
    setTimeout(
      () =>
        dispatch(
          asyncRequestStatus(ASYNC_REQUEST_STATUS_ENUM.HIDE_NOTIFICATION)
        ),
      4000
    );
  });
};

export default addNewFoodToServer;
