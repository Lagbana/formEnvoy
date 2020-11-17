import React from 'react'
import { shallow, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import { AppTitle } from './AppTitle'

configure({ adapter: new Adapter() })

test('<AppTitle /> renders correctly', () => {
  const component = shallow(<AppTitle color={'blue'} style={{}} />)
  component.unmount()
  expect(toJson(component)).toMatchSnapshot()
})
