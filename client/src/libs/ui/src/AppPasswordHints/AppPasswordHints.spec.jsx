import React from 'react'
import { shallow, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import { AppPasswordHints } from './AppPasswordHints'

configure({ adapter: new Adapter() })

test('<AppPasswordHints /> renders correctly', () => {
  const component = shallow(<AppPasswordHints password={'password123'} />)
  component.unmount()
  expect(toJson(component)).toMatchSnapshot()
})
