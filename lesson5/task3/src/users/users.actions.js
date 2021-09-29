export const FILTER_CHANGE = 'USERS/FILTER_CHANGE';

export const filterUsers = (text) => {
  return {
    type: FILTER_CHANGE,
    payload: { text },
  };
};
