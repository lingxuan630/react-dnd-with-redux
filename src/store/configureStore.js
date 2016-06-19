import { createStore, combineReducers, applyMiddleware, compose} from 'redux'
import rootReducer from '../reducers'
import ReduxThunk from 'redux-thunk';
import { hashHistory, browserHistory } from 'react-router';
import { syncHistory, routerReducer, routerMiddleware } from 'react-router-redux';

export default function configureStore(initialState) {
  
  const middleware = routerMiddleware(browserHistory)

  const createStoreWithMiddleware = applyMiddleware(
    middleware,
		ReduxThunk
	)(createStore);

  const store = createStore(rootReducer, initialState, compose(
      applyMiddleware(
        ReduxThunk
      ),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

	// const store = createStoreWithMiddleware(rootReducer);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
