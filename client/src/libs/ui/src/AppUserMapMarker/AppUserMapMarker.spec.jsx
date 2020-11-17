import React from 'react'
import { shallow, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import { AppUserMapMarker } from './AppUserMapMarker'

configure({ adapter: new Adapter() })

test('<AppUserMapMarker /> renders correctly', () => {
	const component = shallow(<AppUserMapMarker color={'blue'} />)
	component.unmount()
  expect(toJson(component)).toMatchSnapshot()
})
