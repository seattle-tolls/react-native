import { SWITCH_TOLL_NAME } from '../constants/action-types'
// import { createSelector } from 'reselect'

const initialState = ''

const tollNameReducer = (tollName = initialState, action) => {
  switch (action.type) {
    case SWITCH_TOLL_NAME:
      return action.payload
    default:
      return tollName
  }
}

// TODO: finish the get name selector
export const getName = state => {
  console.log('TOLLNAME-->', state.tollName)
}

export default tollNameReducer