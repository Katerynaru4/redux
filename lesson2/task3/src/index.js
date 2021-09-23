import store from './store.js';
import { deleteUser, addUser } from './users.actions.js';

store.dispatch(addUser(1, 'new User'));
store.dispatch(deleteUser(1));
store.dispatch(addUser(2, 'New User'));

store.subscribe(() => {
  console.log(store.getState());
});
