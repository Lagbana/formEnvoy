import React from 'react'
import { shallow, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import { AppIcon } from '.'

configure({ adapter: new Adapter() })


test('<AppIcon /> renders correctly', () => {
  const component = shallow(<AppIcon name={'move'} />)
  expect(toJson(component)).toMatchSnapshot()
})
