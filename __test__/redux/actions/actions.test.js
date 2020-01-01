import { fetchTollInfo, setTollInfo } from '../../../src/redux/actions/toll'
import { setTollName } from '../../../src/redux/actions/toll-name'

describe('REDUX ACTIONS', () => {
  describe('Toll action', () => {
    it('should run fetch toll action', () => {
      const fetchToll = fetchTollInfo()
      expect(fetchToll).toMatchSnapshot()
    })

    it('should run set toll action', () => {
      const payload = { toll1: 'one', toll2: 'two' }
      const setToll = setTollInfo(payload)
      expect(setToll).toMatchSnapshot()
    })
  })

  describe('Toll Name action', () => {
    it('should run the toll name action', () => {
      const payload = 'fakeToll'
      const tollName = setTollName(payload)
      expect(tollName).toMatchSnapshot()
    })
  })
})