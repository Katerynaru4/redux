import store from './store.js';
import { addProduct, removeProduct } from './cart.actions';
import { setLanguage } from './language.actions';
import { setUser, removeUser } from './user.actions';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(setUser({ id: 76, name: 'Sarah' }));
store.dispatch(removeUser());
store.dispatch(setLanguage('gp'));
store.dispatch(setLanguage('en'));
store.dispatch(addProduct({ id: 1, name: 'tv' }));
store.dispatch(addProduct({ id: 2, name: 'tv2' }));
store.dispatch(removeProduct(2));
