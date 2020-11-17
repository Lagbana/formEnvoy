import React from 'react'
import { shallow, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import { AppContactPicker } from './AppContactPicker'

configure({ adapter: new Adapter() })

test('<AppContactPicker /> renders correctly', () => {
  const component = shallow(<AppContactPicker />)
  component.unmount()
  expect(toJson(component)).toMatchSnapshot()
})
