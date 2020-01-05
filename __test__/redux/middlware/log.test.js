import logMiddleware from '../../../src/redux/middleware/log'

describe('MIDDLEWARE', ()=>{
  describe('middleware/log', ()=>{
    beforeEach(()=> {
      next = jest.fn()
      dispatch = jest.fn()
      getState = jest.fn()
      middleware = logMiddleware({ dispatch, getState})(next)
    })

    it('should process the log fn', ()=>{
      const sampleAction = { type: 'LOGGING_SOMETHING'}
      middleware(sampleAction)
      expect(next.mock.calls).toMatchSnapshot()
    })
  })
})