const dayChecker = require('../../src/lib/dayChecker')

describe('DAY CHECKER', () => {
  it(`checks that today's information is passing without arguments`, () => {
    const currDate = dayChecker()
    expect(currDate).toMatchSnapshot()
})

  it('returns the information of Wednesday 2019-12-25 at 6pm', () => {
    const currDate = dayChecker('2019-12-25 18:00')
    expect(true).toEqual(true)
    expect(currDate).toMatchSnapshot()
  })

  it('returns the information of Sunday 2019-12-15 at 9am', () => {
    const currDate = dayChecker('2019-12-15 9:00')
    expect(currDate).toMatchSnapshot()
  })

  it('returns the information of Thursday 2019-11-22 at 7am', () => {
    const currDate = dayChecker('2018-11-22 7:00')
    expect(currDate).toMatchSnapshot()
  })
})