import store from './store.js';
import { deleteUser, addUser } from './users.actions.js';

store.dispatch(addUser({ id: 76, name: 'Sarah' }));
store.dispatch(deleteUser(76));
store.dispatch(addUser({ id: 2, name: 'Tom' }));

console.log(store.getState());

store.subscribe(() => {
  console.log(store.getState());
});
