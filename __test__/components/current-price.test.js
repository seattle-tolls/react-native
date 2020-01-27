import React from 'react'
import Adapter from 'enzyme-adapter-react-16'

import { shallow, configure } from 'enzyme'
import mockDayArr from '../mock/mockDayArr'

configure({ adapter: new Adapter() })

import CurrentPrice from '../../src/components/current-price'

describe('<CurrentPrice />', () => {
  mockDayArr.map(props => {
    const { goodToGo, payByMail, schedule, dayName, holidayName } = props

    let wrapper = shallow(<CurrentPrice { ...props }/>)
    it(`should render component for ${holidayName || dayName}`, () => {
      expect(wrapper.props()).toMatchSnapshot()
      expect(wrapper.find('Text').contains(goodToGo)).toBe(true)
      expect(wrapper.find('Text').contains(payByMail)).toBe(true)
      expect(wrapper.find('Text').contains(schedule)).toBe(true)
      expect(wrapper.find('Text').contains(dayName)).toBe(true)
      holidayName && expect(wrapper.find('Text').contains(holidayName)).toBe(true)
    })
  })
})

