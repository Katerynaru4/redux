import store from './counter.js';
import { increment, decrement } from './counter.js';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(increment());
store.dispatch(decrement());
