import { fetchTollInfo, setTollInfo } from '../../src/redux/actions/toll'
import { FETCH_TOLL_INFO, SET_TOLL_INFO } from '../../src/redux/constants/action-types'

describe('REDUX ACTIONS', ()=>{
  describe('toll', ()=>{
    it('should run fetch toll action', () => {
      const fetchToll = fetchTollInfo()
      expect(fetchToll.type).toBe(FETCH_TOLL_INFO)
    })

    it('should run set toll action', () => {
      const payload = {toll1: 'one', toll2: 'two'}
      const setToll = setTollInfo(payload)
      
      expect(setToll.type).toBe(SET_TOLL_INFO)
      expect(setToll.payload.toll1).toBe('one')
      expect(setToll.payload.toll2).toBe('two')
    })
  })

})