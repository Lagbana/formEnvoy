import React from 'react'
import { shallow, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import { AppHandle } from './AppHandle'

configure({ adapter: new Adapter() })

test('<AppHandle /> renders correctly', () => {
  const component = shallow(<AppHandle />)
  component.unmount()
  expect(toJson(component)).toMatchSnapshot()
})
