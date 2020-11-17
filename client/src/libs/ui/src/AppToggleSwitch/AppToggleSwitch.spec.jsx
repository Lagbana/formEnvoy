import React from 'react'
import { shallow, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import { AppToggleSwitch } from './AppToggleSwitch'
configure({ adapter: new Adapter() })

jest.mock('@dooboo-ui/native-switch-toggle', () => 'switch-toggle')

test('<AppToggleSwitch /> renders correctly', () => {
  const component = shallow(<AppToggleSwitch />)
  component.unmount()
  expect(toJson(component)).toMatchSnapshot()
})
