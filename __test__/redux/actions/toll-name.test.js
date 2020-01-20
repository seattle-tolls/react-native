import { setTollName } from '../../../src/redux/actions/toll-name'
import { SET_TOLL_NAME } from '../../../src/redux/constants/action-types'

describe('ACTIONS', () => {
  describe('actions/toll-name', () => {

    const tollNames = ['toll99', 'toll520']
    tollNames.forEach(payload => {
      it(`should run setTollName on ${payload}`, () => {
        const tollName = setTollName(payload)
        expect(tollName.type).toBe(SET_TOLL_NAME)
        expect(tollName.payload).toEqual(payload)
        expect(tollName).toMatchSnapshot()
      })
    })
  })
})