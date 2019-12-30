import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

import log from './middleware/log'
import fetchInfo from './middleware/fetch-info'
import errorMiddleware from './middleware/error'

const middleware = [
  log,
  errorMiddleware,
  fetchInfo,
]

const enhancer = composeWithDevTools(
  applyMiddleware(...middleware),
)

const store = createStore(rootReducer, enhancer)

window.store = store

export default store