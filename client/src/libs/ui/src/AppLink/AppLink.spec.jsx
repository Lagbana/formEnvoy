import React from 'react'
import { shallow, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import { AppLink } from './AppLink'

configure({ adapter: new Adapter() })

test('<AppLink /> renders correctly', () => {
  const component = shallow(<AppLink />)
  component.unmount()
  expect(toJson(component)).toMatchSnapshot()
})
