import React from 'react'
import { shallow, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import { AppPreload } from './AppPreload'

configure({ adapter: new Adapter() })

test('<AppPreload /> renders correctly', () => {
  const component = shallow(<AppPreload />)
  component.unmount()
  expect(toJson(component)).toMatchSnapshot()
})

