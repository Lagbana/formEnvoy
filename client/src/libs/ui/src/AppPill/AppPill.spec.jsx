import React from 'react'
import { shallow, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import { AppPill } from './AppPill'

configure({ adapter: new Adapter() })

test('<AppPill /> renders correctly', () => {
  const component = shallow(<AppPill />)
  component.unmount()
  expect(toJson(component)).toMatchSnapshot()
})
