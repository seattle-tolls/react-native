import React from 'react'
import Adapter from 'enzyme-adapter-react-16'

import { shallow, configure } from 'enzyme'

configure({ adapter: new Adapter() })

import CurrentPrice from '../../src/components/current-price'

const props = { str:'$3.30' }

describe('<CurrentPrice />', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<CurrentPrice { ...props }/>)
  })

  it('Renders correctly', () => {
    expect(wrapper.props()).toMatchSnapshot()
    expect(wrapper.find('Text').contains(props.str)).toBe(true)
  })
})