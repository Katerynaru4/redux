const ADDUSER = 'ADDUSER';
const DELETEUSER = 'DELETEUSER';

const initialState = {
  usersList: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDUSER: {
      return {
        ...state,
        usersList: state.usersList.concat({
          name: action.name,
          id: action.id,
        }),
      };
    }
    case DELETEUSER: {
      return {
        ...state,
        usersList: state.usersList.filter((user) => user.id !== action.id),
      };
    }
    default:
      return state;
  }
};

export default usersReducer;
