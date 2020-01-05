import tollReducer from '../../../src/redux/reducers/toll'
import { setTollInfo } from '../../../src/redux/actions/toll'

import payload from '../../mock/toll-info-normalized.json'

describe('REDUCERS', () => {
  describe('reducer/toll', () => {
    const initialState = tollReducer('undefined', { type: 'INIT' })
    it('should set the toll reducer', () => {
      const action = setTollInfo(payload)
      const reducer = tollReducer(initialState, action)

      expect(reducer).toEqual(payload)
      expect(reducer['toll99'].name).toBe('99 Tunnel')
      expect(reducer['toll520'].name).toBe('520 Bridge')
      expect(reducer).toMatchSnapshot()
    })

    it('should test for unknown action for tollReducer', () => {
      const reducer = tollReducer(initialState, { type: 'FAKE_ACTION' })
      expect(reducer).toBe(initialState)
      expect(reducer).toMatchSnapshot()
    })
  })
})