import { fetchTollInfo, setTollInfo } from '../../../src/redux/actions/toll'
import { SET_TOLL_INFO, FETCH_TOLL_INFO } from '../../../src/redux/constants/action-types'

describe('ACTIONS', () => {
  describe('actions/toll', () => {
    it('should run fetchTollInfo', () => {
      const fetchToll = fetchTollInfo()
      expect(fetchToll.type).toEqual(FETCH_TOLL_INFO)
      expect(fetchToll).toMatchSnapshot()
    })

    const tollInfo = [
      { toll99: { name: '99 tunnel' } },
      { toll520: { name: '520 toll bridge' } },
      { fakeToll: { name: 'fake toll name' } },
    ]

    tollInfo.forEach(payload => {
      it(`should run setTollInfo on the '${Object.keys(payload)[0]}'`, () => {
        const setToll = setTollInfo(payload)
        expect(setToll.type).toEqual(SET_TOLL_INFO)
        expect(setToll.payload).toEqual(payload)
        expect(setToll).toMatchSnapshot()
      })
    })
  })
})