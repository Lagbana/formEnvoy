import React from 'react'
import { shallow, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import { AppViolator } from './AppViolator'

configure({ adapter: new Adapter() })

jest.mock('@react-navigation/native')

test('<AppViolator /> renders correctly', () => {
  const component = shallow(<AppViolator />)
  component.unmount()
  expect(toJson(component)).toMatchSnapshot()
})
