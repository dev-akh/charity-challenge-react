import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../index';

const enhancers = applyMiddleware(thunk);
const store = createStore(reducer, enhancers);

export default store;
