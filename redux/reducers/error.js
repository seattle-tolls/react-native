import { REPORT_ERROR } from '../constants/action-types'

// TODO: make error reducer
const initialState = false

const errorReducer = (tollName = initialState, action) => {
  switch (action.type) {
    case REPORT_ERROR:
      return action.payload
    default:
      return tollName
  }
}

export default errorReducer