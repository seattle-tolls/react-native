const initialState = {
  todayInfo:{ today: 'some toll info' },
  todaySchedule:{},
}

const tollReducer = (toll = initialState, action) => {
  switch (action.type) {
    case 'SET_TOLL_INFO':
      return action.payload
    default:
      return toll
  }
}

export const todayInfo = state => state.toll.todayInfo

export default tollReducer