import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

import log from './middleware/log'

const middleware = [
  log,
  // fetchInfo,
]

// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//     }) : compose

const enhancer = composeWithDevTools(
  applyMiddleware(...middleware),
)

const store = createStore(rootReducer, enhancer)

export default store