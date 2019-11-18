import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

import log from './middleware/log'
import fetchInfo from './middleware/fetchInfo'

const middleware = [
  log,
  fetchInfo,
]

const enhancer = composeWithDevTools(
  applyMiddleware(...middleware),
)

const store = createStore(rootReducer, enhancer)

window.store = store

export default store