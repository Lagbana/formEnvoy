import React from 'react'
import { shallow, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import { BaseInput } from './BaseInput'

configure({ adapter: new Adapter() })

test('<BaseInput /> renders correctly', () => {
  const component = shallow(<BaseInput />)
  expect(toJson(component)).toMatchSnapshot()
})
