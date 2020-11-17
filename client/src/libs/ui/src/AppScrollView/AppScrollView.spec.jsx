import React from 'react'
import { shallow, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import { AppScrollView } from './AppScrollView'

configure({ adapter: new Adapter() })

test('<AppScrollView /> renders correctly', () => {
  const component = shallow(<AppScrollView />)
  component.unmount()
  expect(toJson(component)).toMatchSnapshot()
})
