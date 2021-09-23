const ADDUSER = 'ADDUSER';
const DELETEUSER = 'DELETEUSER';

export const addUser = (id, name) => {
  return {
    type: ADDUSER,
    id,
    name,
  };
};

export const deleteUser = (id) => {
  return {
    type: DELETEUSER,
    id,
  };
};
