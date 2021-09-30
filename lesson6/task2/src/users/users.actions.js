import { getUserData } from './users.gateway';

export const SHOW_SPINNER = 'SHOW_SPINNER';
export const USER_DATA_RECIEVED = 'USER_DATA_RECIEVED';

export const showSpiner = () => {
  return {
    type: SHOW_SPINNER,
  };
};

export const userDataRecieved = (userData) => {
  return {
    type: USER_DATA_RECIEVED,
    payload: {
      userData,
    },
  };
};

export const fetchUserData = (userName) => {
  return function (dispatch) {
    dispatch(showSpiner());
    getUserData(userName).then((userData) => {
      dispatch(userDataRecieved(userData));
    });
  };
};
