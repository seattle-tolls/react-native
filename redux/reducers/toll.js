import { SET_TOLL_INFO } from '../constants/action-types'
import { createSelector } from 'reselect'

const initialState = {}

const tollReducer = (toll = initialState, action) => {
  switch (action.type) {
    case SET_TOLL_INFO:
      return action.payload
    default:
      return toll
  }
}

export const tollInfo = (state) => {
  const tollInfoObj = state.toll[state.tollName]
  console.log('TOLL INFO', tollInfoObj && tollInfoObj.name)
  return tollInfoObj
}

// FIXME: fix the other selectors according with the derived data

// export const todayInfo = state => state.toll.todayInfo
// export const todaySchedule = state => state.toll.todaySchedule

// export const todayScheduleAsArray = createSelector(
//   todaySchedule,
//   (schedule) => {
//     if(schedule[0]){
//       const scheduleArray = Object.keys(schedule).map(hour => {
//         return ({
//           id: hour,
//           goodToGo: schedule[hour].goodToGo,
//           payByMail: schedule[hour].payByMail,
//           schedule: schedule[hour].schedule,
//         })
//       })
//       return scheduleArray
//     }
//   }
// )

// export const currentTimeInfo = createSelector(
//   todayInfo,
//   todaySchedule,
//   (info, schedule) => {
//     for(let i = info.hour; i >= 0; i--){
//       if(schedule[i]){
//         return{
//           dayName: info.dayName,
//           holidayName: info.holidayName,
//           ...schedule[i],
//         }
//       }
//     }
//   }
// )

export default tollReducer
