import { combineReducers } from 'redux'

import tollReducer, * as fromTollReducer from './toll'

const rootReducer = combineReducers({
  toll: tollReducer,
})

export const todayInfo = state => fromTollReducer.todayInfo(state)

export default rootReducer