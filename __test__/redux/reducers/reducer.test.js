import tollReducer from '../../../src/redux/reducers/toll'
import tollNameReducer from '../../../src/redux/reducers/toll-name'
import { setTollInfo } from '../../../src/redux/actions/toll'
import { setTollName } from '../../../src/redux/actions/toll-name'
import payload from '../../mock/toll-info-payload.json'

describe('REDUCERS', () => {
  describe('reducer/toll', () => {
    const initialState = tollReducer('undefined', { type: 'INIT' })
    it('should set the toll reducer', () => {
      const action = setTollInfo(payload)
      expect(tollReducer(initialState, action)).toMatchSnapshot()
    })
  })

  describe('reducer/toll-name', () => {
    const tollNames = ['toll99', 'toll520']
    const initialState = tollNameReducer('undefined', { type: 'INIT' })
    tollNames.forEach(name => {
      it(`should set the toll name reducer to ${name}`, () => {
        const action = setTollName(name)
        expect(tollNameReducer(initialState, action)).toMatchSnapshot()
      })
    })
  })
})