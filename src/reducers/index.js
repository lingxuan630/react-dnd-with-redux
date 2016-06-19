import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// import routerReducer  from './router';
import dragReducer from './drag';

const rootReducer = combineReducers({
  drag: dragReducer,
  routing: routerReducer
})

export default rootReducer
