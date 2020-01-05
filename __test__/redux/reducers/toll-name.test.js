import tollNameReducer from '../../../src/redux/reducers/toll-name'
import { setTollName } from '../../../src/redux/actions/toll-name'

describe('REDUCERS', () => {
  describe('reducer/toll-name', () => {
    const tollNames = ['toll99', 'toll520']
    const initialState = tollNameReducer('undefined', { type: 'INIT' })
    tollNames.forEach(name => {
      it(`should set the toll name reducer to ${name}`, () => {
        const action = setTollName(name)
        const reducer = tollNameReducer(initialState, action)
        expect(reducer).toBe(name)
        expect(reducer).toMatchSnapshot()
      })
    })

    it('should test for unknown action for tollNameReducer', () => {
      const reducer = tollNameReducer(initialState, { type: 'FAKE_ACTION' })
      expect(reducer).toBe(initialState)
      expect(reducer).toMatchSnapshot()
    })
  })
})