const dayChecker = require('../lib/dayChecker')

describe('Testing the date', () => {
  it('returns the given date of 2019-12-25 at 6pm', () => {
    const currDate = dayChecker('2019-12-25 18:00')
    expect(currDate.isWeekendOrHoliday).toEqual(true)
    expect(currDate.holidayName).toEqual('Christmas Day')
    expect(currDate.dayName).toExist('Tuesday')
    expect(currDate.hour).toEqual(18)
  })

  it('returns the given date of 2019-11-22 at 7am', () => {
    const currDate = dayChecker('2018-12-25 7:26')
    expect(currDate.dayName).toExist('Thursday')
    expect(currDate.isWeekendOrHoliday).toEqual(false)
    expect(currDate.holidayName).toEqual(null)
    expect(currDate.hour).toEqual(7)
  })
})