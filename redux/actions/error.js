import { REPORT_ERROR } from '../constants/action-types'

export const reportError = (error) => ({
  type: REPORT_ERROR, error,
})