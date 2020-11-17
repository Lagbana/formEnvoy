import React from 'react'
import { shallow, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import { AppSpinner } from './AppSpinner'

configure({ adapter: new Adapter() })

test('<AppSpinner /> renders correctly', () => {
  const component = shallow(<AppSpinner color={'purple'} />)
  component.unmount()
  expect(toJson(component)).toMatchSnapshot()
})
