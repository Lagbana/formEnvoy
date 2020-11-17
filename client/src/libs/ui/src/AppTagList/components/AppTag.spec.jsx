import React from 'react'
import { shallow, configure } from 'enzyme'
import toJson from 'enzyme-to-json'
import Adapter from 'enzyme-adapter-react-16'
import { AppTag } from './AppTag'

configure({ adapter: new Adapter() })

test('<AppTag /> renders correctly', () => {
  const component = shallow(
    <AppTag tag={{ label: 'test label', value: 0 }} />
  )
  expect(toJson(component)).toMatchSnapshot()
})
