import { combineReducers } from 'redux'

import tollReducer, * as fromTollReducer from './toll'
import tollNameReducer, * as fromTollNameReducer from './toll-name'

const rootReducer = combineReducers({
  toll: tollReducer,
  tollName: tollNameReducer,
})

export const tollInfo = state => fromTollReducer.tollInfo(state)
// export const todayInfo = state => fromTollReducer.todayInfo(state)
// export const todaySchedule = state => fromTollReducer.todaySchedule(state)
// export const currentTimeInfo = state => fromTollReducer.currentTimeInfo(state)
// export const todayScheduleAsArray = state => fromTollReducer.todayScheduleAsArray(state)

// TODO: combine the toll and name to get some derived data

export default rootReducer