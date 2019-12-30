const dayChecker = require('../lib/dayChecker')

describe('DAY CHECKER', () => {
  it(`checks that today's information is passing without arguments`, () => {
    const currDate = dayChecker()
    expect(currDate.dayName).toBeTruthy()
    expect(typeof currDate.hour).toEqual('number')
  })

  it('returns the information of Wednesday 2019-12-25 at 6pm', () => {
    const currDate = dayChecker('2019-12-25 18:00')
    expect(true).toEqual(true)
    expect(currDate.isWeekendOrHoliday).toEqual(true)
    expect(currDate.holidayName).toEqual('Christmas Day')
    expect(currDate.dayName).toEqual('Wednesday')
    expect(currDate.hour).toEqual(18)
  })

  it('returns the information of Sunday 2019-12-15 at 9am', () => {
    const currDate = dayChecker('2019-12-15 9:00')
    expect(currDate.isWeekendOrHoliday).toEqual(true)
    expect(currDate.holidayName).toEqual(null)
    expect(currDate.dayName).toEqual('Sunday')
    expect(currDate.hour).toEqual(9)
  })

  it('returns the information of Thursday 2019-11-22 at 7am', () => {
    const currDate = dayChecker('2018-11-22 7:00')
    expect(currDate.dayName).toEqual('Thursday')
    expect(currDate.isWeekendOrHoliday).toEqual(false)
    expect(currDate.holidayName).toEqual(null)
    expect(currDate.hour).toEqual(7)
  })
})