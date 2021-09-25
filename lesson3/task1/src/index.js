import store from './store.js';
import { deleteUser, addUser, updateUser } from './users.actions.js';
import { increment, decrement, reset } from './counter.actions.js';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());

store.dispatch(addUser({ id: 76, name: 'Sarah' }));
store.dispatch(deleteUser(76));
store.dispatch(addUser({ id: 2, name: 'Tom' }));
store.dispatch(updateUser(2, { name: 'Bob', age: 15 }));
