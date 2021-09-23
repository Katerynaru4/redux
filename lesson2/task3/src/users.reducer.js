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
          userName: action.name,
          userId: action.id,
        }),
      };
    }
    case DELETEUSER: {
      return {
        ...state,
        usersList: state.usersList.filter((user) => user.userId !== action.id),
      };
    }
  }
};

export default usersReducer;
