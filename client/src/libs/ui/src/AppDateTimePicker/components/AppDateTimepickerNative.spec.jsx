import React from 'react'
import { shallow, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import { AppDateTimePicker } from './AppDateTimePicker.native'

configure({ adapter: new Adapter() })

test('<AppDateTimePicker /> renders correctly', () => {
  const component = shallow(<AppDateTimePicker value={new Date('2020-09-23T15:45:00.247Z')} />)
  expect(toJson(component)).toMatchSnapshot()
})
