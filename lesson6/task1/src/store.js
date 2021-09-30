import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import counterReducer from './counter.reducer';

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};
const composedEnhancer = composeWithDevTools(applyMiddleware(logger));

const store = createStore(counterReducer, composedEnhancer);

export default store;
