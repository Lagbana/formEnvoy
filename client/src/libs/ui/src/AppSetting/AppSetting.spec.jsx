import React from 'react'
import { shallow, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import { AppSetting } from './AppSetting'

configure({ adapter: new Adapter() })

jest.mock('@dooboo-ui/native-switch-toggle', () => 'switch-toggle')

test('<AppSetting /> renders correctly', () => {
	const component = shallow(<AppSetting color={'blue'} label={'testlabel'} />)
  component.unmount()
  expect(toJson(component)).toMatchSnapshot()
})
