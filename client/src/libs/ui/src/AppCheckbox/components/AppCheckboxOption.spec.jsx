import React from 'react'
import { shallow, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import { AppCheckboxOption } from './AppCheckboxOption'

configure({ adapter: new Adapter() })

test('<AppCheckboxOption /> renders correctly', () => {
	const component = shallow(<AppCheckboxOption
		option={{ label: '', value: '' }}
		onPress={(option = { label: '', value: ''}) => {}}
	/>)
  expect(toJson(component)).toMatchSnapshot()
})
