const ADDUSER = 'ADDUSER';
const DELETEUSER = 'DELETEUSER';

export const addUser = (user) => {
  return {
    type: ADDUSER,
    id: user.id,
    name: user.name,
  };
};

export const deleteUser = (id) => {
  return {
    type: DELETEUSER,
    id,
  };
};
