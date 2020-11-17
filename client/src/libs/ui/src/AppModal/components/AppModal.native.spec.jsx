import React from 'react'
import { shallow, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import { AppModal } from './AppModal.native'

configure({ adapter: new Adapter() })

test('<AppModal /> renders correctly', () => {
  const component = shallow(<AppModal visible={true} />)
  component.unmount()
  expect(toJson(component)).toMatchSnapshot()
})
